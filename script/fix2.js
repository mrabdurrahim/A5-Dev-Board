
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
    
    alert("board updated successfully");
      add++;
      addDisplay.textContent = add;
      buttonsAdd[buttonAddIndex].disabled = true;
      buttonAddIndex++;
  });
  
});

// next page option

document.getElementById("discover").addEventListener("click", function() {
    alert("we are going to a new page"); 
    window.location.href="blog.html"; 
});

function goBack() {
    alert("we are coming back to home page"); 
    window.location.href = "index.html";
}

// background color change
let colors = ["silver", "aquamarine", "ivory", "pink", "lightgray"];
        let index = 0;
        document.getElementById("color").addEventListener("click", function() {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        });

        function showInfo() {
            let infoList = document.getElementById("infoList");
            let data =`you have completed the task ${new Date().toLocaleString()}`; 
            let listItem = document.createElement("li");
            listItem.textContent = data;
            infoList.appendChild(listItem);
        }

        function clearHistory() {
            document.getElementById("infoList").innerHTML = "";
        }