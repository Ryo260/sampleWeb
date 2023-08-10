
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function() {
    const message = chatInput.value;

    if (message.trim() !== "") {
        const messageElement = document.createElement("div");
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);

        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
