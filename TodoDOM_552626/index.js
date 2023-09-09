let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let arr = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let data = {
    input: task.value,
    priority: priority.value,
  };
  arr.push(data);

  tbody.innerHTML = "";
  arr.map((element) => {
    let tRow = document.createElement("tr");
    let tData1 = document.createElement("td");
    let tData2 = document.createElement("td");

    tData1.innerText = element.input;
    tData2.innerHTML = `<p style="background-color:${
      element.priority == "High" ? "red" : "green"
    } ;">${element.priority}</p>`;
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tbody.append(tRow);o
  });

  task.value = "";
  priority.value = "";
});
