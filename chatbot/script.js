function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
  
    if (message === "") return;
  
    addMessage("user", message);
    input.value = "";
  
    // Bot response logic
    setTimeout(() => {
      const botReply = getBotResponse(message);
      addMessage("bot", botReply);
    }, 500);
  }
  
  function addMessage(sender, message) {
    const chatBody = document.getElementById("chat-body");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.innerText = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  function getBotResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes("event") || input.includes("upcoming")) {
      return "You can view upcoming events on the Events page!";
    } else if (input.includes("register") || input.includes("sign up")) {
      return "You can register for events through the Sign-Up button under each event card.";
    } else if (input.includes("contact") || input.includes("support")) {
      return "You can reach us at: event@college.edu";
    } else if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I help you with events today?";
    } else {
      return "Sorry, I didn't understand that. Please try asking about events, registration, or contact info.";
    }
  }
  