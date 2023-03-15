"use strict";
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

// ["abc","abcde"] //STORE in local storage
let form = document.querySelector("form");
let ls = localStorage.getItem("todo"); //LOCAL STORAGE DATA
let todo = ls ? JSON.parse(ls) : []; //local storage data parse in ls
form.addEventListener("submit", (e) => {
  e.preventDefault(); //stop default action
  let inpData = form[0].value;
  todo.push(inpData);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
});
todo.map((data, index) => {
  //display

  document.querySelector("tbody").innerHTML += `
    <tr>
    <td>${data}</td>    
    <td onclick="del(${index})">Delete</td> 
    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                      
    </tr>
    
    `;
  let table = document.querySelector("tbody");
  const select = document.createElement("select");
  table.appendChild(select);

  const option1 = document.createElement("option");
  option1.textContent = "--Select--";
  select.appendChild(option1);

  const option2 = document.createElement("option");
  option2.textContent = "todo";
  select.appendChild(option2);

  const option3 = document.createElement("option");
  option3.textContent = "in-progress";
  select.appendChild(option3);

  const option4 = document.createElement("option");
  option4.textContent = "testing";
  select.appendChild(option4);

  const option5 = document.createElement("option");
  option5.textContent = "Completed";
  select.appendChild(option5);

  select.addEventListener("change", function (event) {
    if (event.target.value === "Completed") {
      labelContainer.removeChild("Delete");
    } else {
      labelContainer.appendChild("Delete");
    }
  });
});
//delete
function del(e) {
  let deleted = todo.filter((data, index) => {
    return index !== e;
  });
  localStorage.setItem("todo", JSON.stringify(deleted));
  location.reload();
}

//edit
function edittask(index) {
  let addtaskinput = document.getElementById("addtaskinput");

  let ls = localStorage.getItem("todo");
  let taskobj = JSON.parse(ls);
  addtaskinput.value = taskobj[index];
}

//select
