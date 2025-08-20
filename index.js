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

function render() {
  let app = document.getElementById("app");

  let bankContent = "";
  let oddsContent = "";
  let evensContent = "";
  let buttonDisabled = "";

  if (bank.length === 0) {
    bankContent = "<p>No numbers in bank</p>";
  } else {
    bankContent = "<div>";
    for (let i = 0; i < bank.length; i++) {
      bankContent += "<span>" + bank[i] + "</span>";
    }
    bankContent += "</div>";
  }

  if (odds.length === 0) {
    oddsContent = "<p>No odd numbers</p>";
  } else {
    oddsContent = "<div>";
    for (let i = 0; i < odds.length; i++) {
      oddsContent += "<span>" + odds[i] + "</span>";
    }
    oddsContent += "</div>";
  }

  if (evens.length === 0) {
    evensContent = "<p>No even numbers</p>";
  } else {
    evensContent = "<div>";
    for (let i = 0; i < evens.length; i++) {
      evensContent += "<span>" + evens[i] + "</span>";
    }
    evensContent += "</div>";
  }

  app.innerHTML = `
    <h1>Odds and Events</h1>
    
    <form id="numberForm">
      <input 
        type="number" 
        id="numberInput" 
        placeholder="Enter a number" 
        required
      >
      <button type="submit">Add Number</button>
    </form>
    
    <h2>Number Bank (${bank.length})</h2>
    ${bankContent}
    
    <button onclick="sortOne()" ${buttonDisabled}>Sort 1</button>
    <button onclick="sortAll()" ${buttonDisabled}>Sort All</button>
    
    <h3>Odd Numbers (${odds.length})</h3>
    ${oddsContent}
    
    <h3>Even Numbers (${evens.length})</h3>
    ${evensContent}
    
    <button onclick="clear()">Clear All</button>
  `;
}
render();
