let bank = [];
let odds = [];
let evens = [];

function addToBank(number) {
  bank.push(number);
  render();
}

function sortBank() {
  odds = bank.filter((num) => num % 2 !== 0);
  evens = bank.filter((num) => num % 2 === 0);
  render();
}

function sort() {
  if (bank.length === 0) {
    alert("Please add some numbers to the bank first.");
    return;
  }
}
