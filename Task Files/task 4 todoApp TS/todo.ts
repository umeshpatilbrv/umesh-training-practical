const addtaskinput = document.getElementById("addtaskinput")! as HTMLInputElement;
const addtaskbtn = document.getElementById("addtaskbtn")! as HTMLButtonElement;


// ["abc","abcde"] //STORE in local storage
const form = document.querySelector("form")! as HTMLFormElement;
const ls = localStorage.getItem("todo"); //LOCAL STORAGE DATA
const todo = ls ? JSON.parse(ls) : []; //local storage data parse in ls
form.addEventListener("submit", (e) => {
  e.preventDefault(); //stop default action
  const inpData = (
    document.getElementById("addtaskinput") as HTMLInputElement | null
  )?.value;
  todo.push(inpData);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
});
todo.map((data: any, index: any) => {
  //display

  document.querySelector("tbody")!.innerHTML += `
    <tr>
    <td>${data}</td>    
    <td onclick="del(${index})">Delete</td> 
    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                      
    </tr>
    
    `;
  const labelContainer = document.createElement("div")! as HTMLDivElement;
  const table = document.querySelector("tbody")! as HTMLTableCaptionElement;
  const select = document.createElement("select")! as HTMLSelectElement;
  table.appendChild(select);

  const labelElement = document.createElement("label")! as HTMLLabelElement;
  const option1 = document.createElement("option")! as HTMLOptionElement;
  option1.textContent = "--Select--";
  select.appendChild(option1);

  const option2 = document.createElement("option")! as HTMLOptionElement;
  option2.textContent = "todo";
  select.appendChild(option2);

  const option3 = document.createElement("option")! as HTMLOptionElement;
  option3.textContent = "in-progress";
  select.appendChild(option3);

  const option4 = document.createElement("option")! as HTMLOptionElement;
  option4.textContent = "testing";
  select.appendChild(option4);

  const option5 = document.createElement("option")! as HTMLOptionElement;
  option5.textContent = "Completed";
  select.appendChild(option5);

  select.addEventListener("change", function (event: any) {
    if (event.target.value === "Completed") {
      select.removeChild(option3);
    } else {
      select.appendChild(option3);
    }
  });
});
//delete
function del(e:any) {
  let deleted = todo.filter((data: any, index: any) => {
    return index !== e;
  });
  localStorage.setItem("todo", JSON.stringify(deleted));
  location.reload();
}

//edit
function edittask(index: string | number) {
  const addtaskinput = document.getElementById(
    "addtaskinput"
  )! as HTMLInputElement;

  const ls:any = localStorage.getItem("todo");
  const taskobj = JSON.parse(ls);
  addtaskinput.value = taskobj[index];
}

