function drawMeter(canvasId, value, maxValue, label) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 60;
    const endAngle = (value / maxValue) * Math.PI;

    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#e0e0e0';
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, Math.PI + endAngle);
    ctx.lineWidth = 15;
    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, '#6c63ff');
    gradient.addColorStop(1, '#8a2be2');
    ctx.strokeStyle = gradient;
    ctx.lineCap = 'round';
    ctx.stroke();

    
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(label, centerX, centerY + 10);
}


drawMeter('rankMeter', 70, 100, '70th Percentile');
drawMeter('performanceMeter', 85, 100, '85%');
