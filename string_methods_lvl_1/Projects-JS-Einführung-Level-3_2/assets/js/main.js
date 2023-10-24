const stringInput = document.body.querySelector("#stringInput");
const stringSeparate = document.body.querySelector("#stringSeparate");
const stringBefore = document.body.querySelector("#stringBefore");
const stringAfter = document.body.querySelector("#stringAfter");

let isBefore = false;

function before() {
  isBefore = true;
}

function after() {
  isBefore = false;
}

function checkResult() {
  let number = stringInput.value.indexOf(stringSeparate.value);
  if (isBefore) {
    let stringBefore1 = stringInput.value.slice(0, number);
    let stringBefore2 = stringInput.value.slice(number);
    console.log(number);
    console.log(stringBefore1);
    console.log(stringBefore2);
    stringBefore.textContent = stringBefore1;
    stringAfter.textContent = stringBefore2;
  } else {
    let stringBefore3 = stringInput.value.slice(0, number + 1);
    let stringBefore4 = stringInput.value.slice(number + 1);
    stringBefore.textContent = stringBefore3;
    stringAfter.textContent = stringBefore4;
  }
}
