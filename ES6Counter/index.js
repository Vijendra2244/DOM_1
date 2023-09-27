let para = document.getElementById("countP");
let counter = 0;
let starter = null;
function Start() {
  starter = setInterval(toggleCount, 1000);
}
function Stop() {
  clearInterval(starter);
}
function toggleCount() {
  if (counter < 10) {
    para.innerText = "0" + Number(counter++);
  } else {
    para.innerText = Number(counter++);
  }
}
function increament() {
  Stop();
  if (counter < 10) {
    para.innerText = "0" + Number(counter++);
  } else {
    para.innerText = Number(counter++);
  }
}
function decreament() {
  if (counter >= 0) {
    Stop();
    if (counter < 10) {
      para.innerText = "0" + Number(counter--);
    } else {
      para.innerText = Number(counter--);
    }
  }
}