let bank = [];
let odds = [];
let evens = [];

function addToBank(number) {
  if (number === "" || isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }
  bank.push(Number(number));
  render();
}

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
