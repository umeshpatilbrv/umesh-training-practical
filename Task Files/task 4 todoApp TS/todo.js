var addtaskinput = document.getElementById("addtaskinput");
var addtaskbtn = document.getElementById("addtaskbtn");
// ["abc","abcde"] //STORE in local storage
var form = document.querySelector("form");
var ls = localStorage.getItem("todo"); //LOCAL STORAGE DATA
var todo = ls ? JSON.parse(ls) : []; //local storage data parse in ls
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault(); //stop default action
    var inpData = (_a = document.getElementById("addtaskinput")) === null || _a === void 0 ? void 0 : _a.value;
    todo.push(inpData);
    localStorage.setItem("todo", JSON.stringify(todo));
    location.reload();
});
todo.map(function (data, index) {
    //display
    document.querySelector("tbody").innerHTML += "\n    <tr>\n    <td>".concat(data, "</td>    \n    <td onclick=\"del(").concat(index, ")\">Delete</td> \n    <td><button type=\"button\" onclick=\"edittask(").concat(index, ")\" class=\"text-primary\"><i class=\"fa fa-edit\"></i>Edit</button></td>\n                      \n    </tr>\n    \n    ");
    var labelContainer = document.createElement("div");
    var table = document.querySelector("tbody");
    var select = document.createElement("select");
    table.appendChild(select);
    var labelElement = document.createElement("label");
    var option1 = document.createElement("option");
    option1.textContent = "--Select--";
    select.appendChild(option1);
    var option2 = document.createElement("option");
    option2.textContent = "todo";
    select.appendChild(option2);
    var option3 = document.createElement("option");
    option3.textContent = "in-progress";
    select.appendChild(option3);
    var option4 = document.createElement("option");
    option4.textContent = "testing";
    select.appendChild(option4);
    var option5 = document.createElement("option");
    option5.textContent = "Completed";
    select.appendChild(option5);
    select.addEventListener("change", function (event) {
        if (event.target.value === "Completed") {
            select.removeChild(option3);
        }
        else {
            select.appendChild(option3);
        }
    });
});
//delete
function del(e) {
    var deleted = todo.filter(function (data, index) {
        return index !== e;
    });
    localStorage.setItem("todo", JSON.stringify(deleted));
    location.reload();
}
//edit
function edittask(index) {
    var addtaskinput = document.getElementById("addtaskinput");
    var ls = localStorage.getItem("todo");
    var taskobj = JSON.parse(ls);
    addtaskinput.value = taskobj[index];
}
