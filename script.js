const button = document.getElementById('myButton');
const messageDisplay = document.getElementById('message-display');
const history = document.getElementById('history');
const clearHistoryButton = document.getElementById('clearHistory');

button.addEventListener('click', function() {
    const message = 'বাটন ক্লিক করা হয়েছে!';
    messageDisplay.textContent = message;

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    history.appendChild(messageElement);
});

clearHistoryButton.addEventListener('click', function() {
    history.innerHTML = ''; // হিস্টোরি ক্লিয়ার করা হলো
});