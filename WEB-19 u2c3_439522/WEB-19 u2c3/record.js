// fill in javascript code here
let myForm = document.querySelector("form");
let employeeName = document.getElementById("name");
let employeId = document.getElementById("employeeID");
let depa = document.getElementById("department");
let experiance = document.getElementById("exp");
let emailId = document.getElementById("email");
let mobileNumber = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let arr = [];
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let role;
  if (experiance.value > 5) {
    role = "Senior";
  } else if (experiance.value >= 2 && experiance.value <= 5) {
    role = "Junior";
  } else {
    role = "Fresher";
  }
  let employeData = {
    name: employeeName.value,
    employeeID: employeId.value,
    department: depa.value,
    exp: experiance.value,
    email: emailId.value,
    mbl: mobileNumber.value,
    role: role,
  };
  arr.push(employeData);
  tbody.innerHTML = "";
  arr.map((element) => {
    let tRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    let tableData5 = document.createElement("td");
    let tableData6 = document.createElement("td");
    let tableData7 = document.createElement("td");

    tableData1.innerText = element.name;
    tableData2.innerText = element.employeeID;
    tableData3.innerText = element.department;
    tableData4.innerText = element.exp;
    tableData5.innerText = element.email;
    tableData6.innerText = element.mbl;
    tableData7.innerText = element.role;

    tRow.append(
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6,
      tableData7
    );
    let btnTD = document.createElement("td");
    let btnDelet = document.createElement("button");
    btnDelet.innerText = "Delete";
    btnDelet.addEventListener("click", function () {
      tbody.removeChild(tRow);
    });
    btnDelet.style.backgroundColor = "red";
    btnDelet.style.color = "white";
    btnDelet.appendChild(btnTD);
    tRow.appendChild(btnDelet);
    tbody.append(tRow);
  });
});
