// fill in javascript code here

let myForm = document.querySelector("form");
let docName = document.getElementById("name");
let docId = document.getElementById("docID");
let department = document.getElementById("dept");
let experiance = document.getElementById("exp");
let emailId = document.getElementById("email");
let mobileNumber = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let array = [];
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let role;
  if (experiance.value > 5) {
    role = "senior";
  } else if (experiance.value >= 2 && experiance.value <= 5) {
    role = "Junior";
  } else if (experiance.value <= 1) {
    role = "Fresher";
  }
  let doctorsData = {
    name: docName.value,
    docID: docId.value,
    dept: department.value,
    exp: experiance.value,
    email: emailId.value,
    mbl: mobileNumber.value,
    role: role,
  };
  array.push(doctorsData);
  tbody.innerHTML = "";

  array.map((ele) => {
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    let tableData5 = document.createElement("td");
    let tableData6 = document.createElement("td");
    let tableData7 = document.createElement("td");

    tableData1.innerText = ele.name;
    tableData2.innerText = ele.docID;
    tableData3.innerText = ele.dept;
    tableData4.innerText = ele.exp;
    tableData5.innerText = ele.email;
    tableData6.innerText = ele.mbl;
    tableData7.innerText = ele.role;

    tableRow.append(
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
      tbody.removeChild(tableRow);
    });
    btnDelet.style.backgroundColor = "red";
    btnDelet.style.color = "white";
    btnDelet.appendChild(btnTD);
    tableRow.appendChild(btnDelet);
    tbody.append(tableRow);
  });
});
