let bank = [];
let odds = [];
let evens = [];

//Function to add numbers to the bank
function addToBank(number) {
  if (number === "" || isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }
  bank.push(Number(number));
  render();
}

//Function to sort one number at a time
function sortOne() {
  if (bank.length === 0) {
    alert("Please add numbers first");
    return;
  }
  let number = bank.shift();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}

//Function to sort all numbers at once
function sortAll() {
  if (bank.length === 0) {
    alert("Please add numbers first");
    return;
  }

  while (bank.length > 0) {
    let number = bank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }
  render();
}

//Function to clear all numbers
function clear() {
  bank = [];
  odds = [];
  evens = [];
  render();
}
