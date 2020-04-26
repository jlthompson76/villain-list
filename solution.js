// Declare Variables
let inputButtons, inputText, wantedList, caughtList, villain, wantedCount, caughtCount, li, wantedVillains, total, totalArea, allVillains, villainList, villainStatus;

// Set Initial Counts to Zero
wantedCount = 0;
caughtCount = 0;

////////////// Part 1 /////////////////////
/* 1.1) Set the classes of the inputs (buttons) to "btn" by using a loop */

inputButtons = document.querySelectorAll('input[type = button]');
console.log(inputButtons);
for (let i = 0; i < inputButtons.length; i++) {
        inputButtons[i].className = "btn";
}

/*  1.2) Set the classes of the inputs (text) to txt-box by using a loop */

inputText = document.querySelectorAll('input[type = text');
for (let i = 0; i < inputText.length; i++) {
        inputText[i].className = "txt-box";
}

/* 1.3) grab both <ul> that we are going to append <li> nodes to and store in variables */

wantedList = document.querySelector("#wanted-list");
console.log(wantedList);

caughtList = document.querySelector("#caught-list");
console.log(caughtList);

/* 1.4) Create a function called addVillain that gets the value of the textbox and adds it to the UL.
        You also want to update the wanted count next to the h2 tag.
        Tip: you can also set the value to the text input to an empty string when you're done.
*/

// Refactored code to create additional functions, in addition to addVillain function below

function getVillain() {
        villain = document.querySelector('#txt-villain').value;
}

function resetTextBox() {
        document.querySelector('#txt-villain').value = "";
}

function countWanted() {
        wantedCount = wantedList.querySelectorAll('li').length;
        document.querySelector("#wanted-count").innerText = wantedCount;
}

function countCaught() {
        caughtCount = caughtList.querySelectorAll('li').length;
        document.querySelector("#caught-count").innerText = caughtCount;
}

function addVillain() {
        // Capture Textbox Value
        getVillain();

        // Add Villain to Wanted List
        let li = document.createElement("li");
        li.innerText = villain;
        wantedList.appendChild(li);

        // Update Wanted Count
        countWanted();

        // Reset Text Box
        resetTextBox();
}

/*  1.5) Create a function called caughtVillain that gets the value of the textbox and adds it to the UL.
         You also want to remove the caught villain from the wanted list.
         You also want to update the wanted and caught counts next to the h2 tags.
     */

function caughtVillain() {
        // Capture Textbox Value
        getVillain();

        // Add Villain to Caught List
        li = document.createElement("li");
        li.innerText = villain;
        caughtList.appendChild(li);

        // Remove Caught Villain from Wanted List
        wantedVillains = wantedList.querySelectorAll('li');
        // let wantedVillains = wantedList.childNodes; // alternate code shown by Sonia in class
        for (let i = 0; i < wantedVillains.length; i++) {
                if (wantedVillains[i].innerText === villain) {
                        wantedVillains[i]
                        .remove();
                }
        }
        
        // Update Caught Count
        countCaught();

        // Update Wanted Caught
        countWanted();

        // Reset Text Box
        resetTextBox();
}

/* 1.6) Create a function called getTotal that displays the total number of villains that are on both lists.
        You should display it in the #item-count
        Tip: You need to set the className of the total-area to just "total-area" for it to show up.
*/

function getTotal() {
        // Calculate Total from Wanted & Caught Lists
        total = wantedCount + caughtCount;

        // Display Total
        document.querySelector('#item-count').textContent = `Total Villains: ${total}`;
        totalArea = document.querySelector('.total-area');
        totalArea.className = "total-area";
}

/* 1.7) Create a function called getStatus that searches all li elements for the villain the user is looking for.
        You will need to find the parent element of the li once there is a match.
        Whichever list the villain is on, create an alert message.
*/

function getStatus() {
        // Capture Textbox Value
        getVillain();

        // Select All Villains
        allVillains = document.querySelectorAll('li');
        console.log(allVillains);

        // Search All Villains for a Match
        for (i = 0; i < allVillains.length; i++) {

                // If match found, determine which list the villain is on
                console.log(allVillains[i].textContent);
                if (allVillains[i].textContent === villain) {
                        villainList = allVillains[i].parentElement.id;
                        console.log(villainList);
                        if (villainList === "wanted-list") {
                                villainList = "Wanted List";
                        } else if (villainList === "caught-list") {
                                villainList = "Caught List";
                        }
                        villainStatus = `${villain} is on the ${villainList}.`;
                        break;

                // If match not found, villain isn't on either list
                } else {
                        villainStatus = `${villain} isn't currently on the Wanted or Caught list.`;
                }
        }

        // Display Alert Message to User
        alert(villainStatus);
}

/* 1.8) Bind all the clicks to the appropriate inputs and functions by using event listeners  */

// Add event listener to ADD villain button
document.querySelector('#btn-add').addEventListener('click', addVillain);

// Add event listener to CAUGHT villain button
document.querySelector('#btn-caught').addEventListener('click', caughtVillain);

// Add event listener to GET TOTAL button
document.querySelector('#btn-total').addEventListener('click', getTotal);

// Add event listener to GET status button
document.querySelector('#btn-status').addEventListener('click', getStatus);
