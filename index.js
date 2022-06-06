  //Select the elements
  let countEl = document.getElementById("count-el");
  let saveEl = document.getElementById("save-el");
  let total = document.getElementById("total");
  let count = 0;

  //Functions

  //Add Passenger
  function increment() {
    count = count + 1;
    countEl.textContent = count;
  }

  //Save Passenger
  function saveData() {
    let countTotal = count + ' - ';
    saveEl.textContent += countTotal;
    countEl.textContent = 0;
    count = 0; 
  }


