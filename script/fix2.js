
const currentDate = new Date();
document.getElementById("date").innerHTML = currentDate.toDateString();
// click = add and click = subtract
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

// next page option

document.getElementById("discover").addEventListener("click", function() {
    alert("তুমি কিন্তু মামা পরবর্তী পেজে যাচ্ছো!"); 
    window.location.href="blog.html"; 
});

function goBack() {
    alert("তুমি কিন্তু মামা ডিস্টার্ব করেই যাচ্ছো!"); 
    window.location.href = "index.html";
}

// background color change
let colors = ["silver", "aquamarine", "ivory", "pink", "lightgray"];
        let index = 0;
        document.getElementById("color").addEventListener("click", function() {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        });