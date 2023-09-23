let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");
let arr = [];

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let input1 = document.getElementById("userName").value;
  let input2 = document.getElementById("userAge").value;

  let data = {
    userName: input1,
    userAge: input2,
  };
  arr.push(data);


  localStorage.setItem("userData", JSON.stringify(arr));

 
  tbody.innerHTML = "";

  
  arr.forEach((element) => {
    let tRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");

    tableData1.innerText = element.userName;
    tableData2.innerText = element.userAge;

    tRow.append(tableData1, tableData2);
    tbody.appendChild(tRow);
  });
});


document
  .getElementById("retrieveData")
  .addEventListener("click", function () {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData) {
      tbody.innerHTML = "";

      storedData.forEach((element) => {
        let tRow = document.createElement("tr");
        let tableData1 = document.createElement("td");
        let tableData2 = document.createElement("td");

        tableData1.innerText = element.userName;
        tableData2.innerText = element.userAge;

        tRow.append(tableData1, tableData2);
        tbody.appendChild(tRow);
      });
    } else {
      alert("No data stored in Local Storage.");
    }
  });


