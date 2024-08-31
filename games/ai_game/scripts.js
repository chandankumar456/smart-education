const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let nodes = [];
let edges = [];
let selectedNode = null;

canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const clickedNode = nodes.find(node => isInsideNode(x, y, node));

    if (clickedNode) {
        if (selectedNode && selectedNode !== clickedNode) {
            
            edges.push({ from: selectedNode, to: clickedNode });
            selectedNode = null;
        } else {
            selectedNode = clickedNode;
        }
    } else {
        
        nodes.push({ id: nodes.length + 1, x, y, visited: false });
    }
    drawGraph();
});

function isInsideNode(x, y, node) {
    return Math.hypot(node.x - x, node.y - y) < 20;
}

function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    edges.forEach(edge => {
        ctx.beginPath();
        ctx.moveTo(edge.from.x, edge.from.y);
        ctx.lineTo(edge.to.x, edge.to.y);
        ctx.strokeStyle = '#888';
        ctx.stroke();
    });

    // Draw nodes
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = node.visited ? '#6c63ff' : '#fff';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.stroke();
        ctx.fillStyle = '#333';
        ctx.fillText(node.id, node.x - 5, node.y + 5);
    });
}

function startBFS() {
    if (nodes.length === 0) return;
    resetVisited();
    const queue = [nodes[0]];
    let sequence = 'BFS Traversal: ';
    bfsStep(queue, sequence);
}

function bfsStep(queue, sequence) {
    if (queue.length === 0) {
        document.getElementById('traversalOutput').innerText = sequence;
        return;
    }
    const node = queue.shift();
    if (!node.visited) {
        node.visited = true;
        sequence += node.id + ' ';
        const neighbors = edges
            .filter(edge => edge.from === node || edge.to === node)
            .map(edge => edge.from === node ? edge.to : edge.from)
            .filter(neighbor => !neighbor.visited);
        queue.push(...neighbors);
        drawGraph();
    }
    setTimeout(() => bfsStep(queue, sequence), 500); 
}

function startDFS() {
    if (nodes.length === 0) return;
    resetVisited();
    const stack = [nodes[0]];
    let sequence = 'DFS Traversal: ';
    dfsStep(stack, sequence);
}

function dfsStep(stack, sequence) {
    if (stack.length === 0) {
        document.getElementById('traversalOutput').innerText = sequence;
        return;
    }
    const node = stack.pop();
    if (!node.visited) {
        node.visited = true;
        sequence += node.id + ' ';
        const neighbors = edges
            .filter(edge => edge.from === node || edge.to === node)
            .map(edge => edge.from === node ? edge.to : edge.from)
            .filter(neighbor => !neighbor.visited);
        stack.push(...neighbors);
        drawGraph();
    }
    setTimeout(() => dfsStep(stack, sequence), 500); 
}

function resetGraph() {
    nodes = [];
    edges = [];
    selectedNode = null;
    drawGraph();
    document.getElementById('traversalOutput').innerText = 'Traversal Sequence: ';
}

function resetVisited() {
    nodes.forEach(node => node.visited = false);
}
