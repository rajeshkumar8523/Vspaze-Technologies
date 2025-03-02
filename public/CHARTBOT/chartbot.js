const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

// Predefined responses for VSpaze Technologies
const botResponses = {
  hello: "Hi there! Welcome to VSpaze Technologies. How can I assist you today? 😊",
  hi: "Hi there! Welcome to VSpaze Technologies. How can I assist you today? 😊",
  services: "At VSpaze Technologies, we offer custom software development, mobile app development, web solutions, cloud computing, and IT consulting services.",
  pricing: "Our pricing depends on the scope of your project. Please contact our sales team for a detailed quote.",
  support: "Our support team is available 24/7 to assist you. You can reach us via email or phone.",
  "how to start": "To get started with VSpaze Technologies, you can schedule a consultation with us. We'll discuss your requirements and propose a tailored solution.",
  "cloud solutions": "We specialize in cloud-based solutions, including migration, integration, and optimization services.",
  "contact info": "You can reach us at contact@vspazetechnologies.com or call us at +1-800-123-4567.",
  "case studies": "We have successfully delivered projects in various industries, including healthcare, finance, and e-commerce. Check out our portfolio on our website.",
  bye: "Goodbye! Feel free to reach out if you have more questions. Have a great day from VSpaze Technologies!",
  "what's provided by you": "We provide a wide range of services at VSpaze Technologies, including custom software development, mobile app development, web solutions, cloud computing, and IT consulting. Our team is committed to delivering innovative and tailored solutions to meet your business needs. How can we assist you further?",
  default: "I'm sorry, I didn't understand that. Could you rephrase or ask about our services, pricing, or support?",
};

// Function to handle user messages
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  appendMessage(message, "user-message");

  // Clear the input field
  userInput.value = "";

  // Simulate bot response
  setTimeout(() => {
    const botResponse = getBotResponse(message);
    appendMessage(botResponse, "bot-message");
  }, 500);
}

// Append message to chat body
function appendMessage(message, className) {
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${className}`;
  messageElement.innerText = message;
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Get bot response based on user input
function getBotResponse(userMessage) {
  const normalizedMessage = userMessage.toLowerCase();
  return botResponses[normalizedMessage] || botResponses.default;
}

// Add event listener for "Enter" key press
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});