document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('chatbox-messages');
    const inputField = document.getElementById('chatbox-input');
    const sendButton = document.getElementById('chatbox-send');

    const responses = {
        "hello": "Hi there! I'm your chatbot. You can ask me about different technologies in computer science.\n Do you want to learn a skill or language",
        "skill":"Which of the following skills you want to go for : Web Development,  Cyber Security, Data-Analyst, System Design, Devops",
        "language":"Which language do you want to learn : Java, JavaScript, NodeJS, GoLang, Python, Sql, Rust",
        "web development": `
            For web development, start with <a href="https://youtu.be/kUMe1FH4CHE?si=X6OPWQJR5B3OdYX5" target="_blank">HTML</a>, 
        <a href="https://youtu.be/OXGznpKZ_sA?si=copNXC-Civs0J0eI" target="_blank">CSS</a>, and 
        <a href="https://youtu.be/PkZNo7MFNFg?si=Ux6zpNw63emfDJYD" target="_blank">JavaScript</a>.. Then explore frameworks like React or Angular.
            <br><br>
            <a href="./asset/full-stack.pdf" download>Download the  Roapmap for Full-Stack Development</a>
        `,
        "cyber security": `
            To start in cybersecurity, focus on learning computer networks, operating systems and basic programming. Here's a pdf roadmap you ca refer to
            <br><br>
             <a href="./asset/cyber-security.pdf" download>Download the Roadmap for Cyber Security</a>
        `,
        "data analyst": `
            A data analyst roadmap typically starts with mastering Excel and SQL for data manipulation and querying, followed by learning programming languages like Python or R for data analysis and visualization. Next, focus on acquiring knowledge in statistics, data visualization tools (e.g., Tableau, Power BI), and basic machine learning to draw insights and create data-driven solutions.
            <br><br>
             <a href="./asset/data-analyst.pdf" download>Download the Roadmap for Data Analyst</a>
        `,
        "system design": `
           A system design roadmap begins with understanding the fundamentals of scalable systems, including load balancing, caching, and database sharding. Next, dive into designing distributed systems, focusing on consistency, availability, and partition tolerance (CAP theorem). Finally, practice designing real-world systems by solving system design problems and exploring architectural patterns like microservices and event-driven design.
            <br><br>
             <a href="./asset/design-system.pdf" download>Download the Roadmap for System Design</a>
        `,
        "devops": `
           A system design roadmap begins with understanding the fundamentals of scalable systems, including load balancing, caching, and database sharding. Next, dive into designing distributed systems, focusing on consistency, availability, and partition tolerance (CAP theorem). Finally, practice designing real-world systems by solving system design problems and exploring architectural patterns like microservices and event-driven design.
            <br><br>
             <a href="./asset/devops.pdf" download>Download the Roadmap for Devops</a>
        `,
        "java": `
          You can learn Java effectively by following structured tutorials; check out this comprehensive video on <a href="https://youtu.be/A74TOX803D0?si=XxtaFk1qOCAlhU6H" target="_blank">Java</a> basics
            <br><br>
             <a href="./asset/java.pdf" download>Download the Roadmap for learning Java</a>
        `,
        "nit sikkim": "This is one of the institute of national importance. In between the beautiful mountains and himalayan terrain",
        "cse": "Computer Science & Engineering",
        "default": "Sorry, I don't understand that. Can you please rephrase?"
    };

    function sendMessage(message, isUser = true) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = message; // Use innerHTML to render HTML content like links
        messageElement.className = isUser ? 'user-message' : 'bot-message';
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase().trim();
        return responses[userMessage] || responses["default"];
    }

    function simulateTyping(message, callback) {
        const typingElement = document.createElement('div');
        typingElement.className = 'bot-message typing-animation';
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            typingElement.remove();
            sendMessage(message, false);
            callback && callback();
        }, 2000); 
    }

    function handleSend() {
        const userMessage = inputField.value;
        if (userMessage.trim() === "") return;
        sendMessage(userMessage);
        inputField.value = "";

        const botResponse = getBotResponse(userMessage);
        simulateTyping(botResponse);
    }

    function initializeChatbot() {
        sendMessage("Hello! I'm here to help you with information about various technologies. Type 'hello' to get started and learn more about my functionalities.", false);
    }

    sendButton.addEventListener('click', handleSend);

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
    initializeChatbot();
});
