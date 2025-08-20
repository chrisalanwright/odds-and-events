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
    alert("Please add numbers to the bank first.");
    return;
  }

  const number = bank.shift();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}

// Step 4: Function to sort all numbers at once
function sortAll() {
  if (bank.length === 0) {
    alert("Please add numbers to the bank first.");
    return;
  }

  while (bank.length > 0) {
    const number = bank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }
  render();
}

// Step 5: Function to clear all data
function clearAll() {
  bank = [];
  odds = [];
  evens = [];
  render();
}

// Step 6: Function to render the entire app
function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container">
      <h1>Odds and Events</h1>
      
      <div class="input-section">
        <form id="numberForm">
          <input 
            type="number" 
            id="numberInput" 
            placeholder="Enter a number"
            required
          >
          <button type="submit">Add Number</button>
        </form>
      </div>
      
      <div class="bank-section">
        <h2>Number Bank (${bank.length})</h2>
        <div class="numbers-display">
          ${
            bank.length === 0
              ? "<p>No numbers in bank</p>"
              : bank.map((num) => `<span>${num}</span>`).join("")
          }
        </div>
        <div class="bank-buttons">
          <button onclick="sortOne()" ${
            bank.length === 0 ? "disabled" : ""
          }>Sort 1</button>
          <button onclick="sortAll()" ${
            bank.length === 0 ? "disabled" : ""
          }>Sort All</button>
        </div>
      </div>
      
      <div class="categories">
        <div class="category">
          <h3>Odd Numbers (${odds.length})</h3>
          <div class="numbers-display">
            ${
              odds.length === 0
                ? "<p>No odd numbers</p>"
                : odds.map((num) => `<span>${num}</span>`).join("")
            }
          </div>
        </div>
        
        <div class="category">
          <h3>Even Numbers (${evens.length})</h3>
          <div class="numbers-display">
            ${
              evens.length === 0
                ? "<p>No even numbers</p>"
                : evens.map((num) => `<span>${num}</span>`).join("")
            }
          </div>
        </div>
      </div>
      
      <div class="clear-section">
        <button onclick="clearAll()">Clear All</button>
      </div>
    </div>
  `;

  // Step 7: Set up event listeners to make the form work
  const form = document.getElementById("numberForm");
  const input = document.getElementById("numberInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToBank(input.value);
    input.value = "";
  });
}

// Step 8: Start the app
render();
