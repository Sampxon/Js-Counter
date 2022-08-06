//using constructor functions and class

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`please check "${selection}" `);
  }
}
// getElement('.first-counter');

function Counter(element, value) {
  console.log(element, value);
  this.counter = element;
  this.value = value;
  this.valueEl = element.querySelector('.value');
  this.increaseEl = element.querySelector('.increase');
  this.decreaseEl = element.querySelector('.decrease');
  this.resetEl = element.querySelector('.reset');
  this.valueEl.textContent = this.value;
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increaseEl.addEventListener('click', this.increase);
  this.decreaseEl.addEventListener('click', this.decrease);
  this.resetEl.addEventListener('click', this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueEl.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueEl.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueEl.textContent = this.value;
};

const firstCounter = new Counter(document.querySelector('.first-counter'), 105);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// firstCounter.increase();
// secondCounter.decrease();
// firstCounter.reset();
