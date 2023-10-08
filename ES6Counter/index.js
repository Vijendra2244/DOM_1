
class Counter {
  constructor() {
    this.para = document.getElementById("countP");
    this.counter = 0;
    this.starter = null;
  }

   Start() {
    this.starter = setInterval(this.toggleCount.bind(this), 1000);
  }

  Stop() {
    clearInterval(this.starter);
  }

  toggleCount() {
    if (this.counter < 10) {
      this.para.innerText = "0" + Number(this.counter++);
    } else {
      this.para.innerText = Number(this.counter++);
    }
  }

  increment() {
    this.Stop();
    if (this.counter < 10) {
      this.para.innerText = "0" + Number(this.counter++);
    } else {
      this.para.innerText = Number(this.counter++);
    }
  }

  decrement() {
    if (this.counter >= 0) {
      this.Stop();
      if (this.counter < 10) {
        this.para.innerText = "0" + Number(this.counter--);
      } else {
        this.para.innerText = Number(this.counter--);
      }
    }
  }
}

const myCounter = new Counter();

