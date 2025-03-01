
let task = 6;
const taskDisplay = document.getElementById('task');
const buttons = document.querySelectorAll('.completed');
let buttonIndex = 0;

let add = 23;
const addDisplay = document.getElementById('add');
const buttonsAdd = document.querySelectorAll('.completed');
let buttonAddIndex = 0;



buttons.forEach(button => {
    button.addEventListener('click', function() {
        task--;
        taskDisplay.textContent = task;
        buttons[buttonIndex].disabled = true;
        buttonIndex++;


    });
});

buttonsAdd.forEach(buttonAdd => {
  buttonAdd.addEventListener('click', function() {
      add++;
      addDisplay.textContent = add;
      buttonsAdd[buttonAddIndex].disabled = true;
      buttonAddIndex++;
  });
});

const button = document.getElementById('completed');
const messageDisplay = document.getElementById('message-display');
const history = document.getElementById('history');
const clearHistoryButton = document.getElementById('clearHistory');

button.addEventListener('click', function() {
    const message = 'বাটন ক্লিক করা হয়েছে!';
    messageDisplay.textContent = message;

    const messageElement = document.createElement('my name is ssd');
    messageElement.textContent = message;
    history.appendChild(messageElement);
});

clearHistoryButton.addEventListener('click', function() {
    history.innerHTML = ''; // হিস্টোরি ক্লিয়ার করা হলো
});