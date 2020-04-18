////////////// Part 1 /////////////////////
/* 1.1) Set the classes of the inputs (buttons) to "btn" by using a loop */

let inputButtons = document.querySelectorAll('input[type = button]');
console.log(inputButtons);
for (let i = 0; i < inputButtons.length; i++) {
        inputButtons[i].className = "btn";
}

/*  1.2) Set the classes of the inputs (text) to txt-box by using a loop */

let inputText = document.querySelectorAll('input[type = text');
console.log(inputText);
for (let i = 0; i < inputText.length; i++) {
        inputText[i].className = "txt-box";
}

/* 1.3) grab both <ul> that we are going to append <li> nodes to and store in variables */

let wantedList = document.querySelector("#wanted-list");
console.log(wantedList);

let caughtList = document.querySelector("#caught-list");
console.log(caughtList);

/* 1.4) Create a function called addVillain that gets the value of the textbox and adds it to the UL.
        You also want to update the wanted count next to the h2 tag.
        Tip: you can also set the value to the text input to an empty string when you're done.
*/

document.querySelector('#btn-add').addEventListener('click', addVillain);

function addVillain() {
        let villain = document.querySelector('#txt-villain').value;
        let li = document.createElement("li");
        li.innerText = villain;
        wantedList.appendChild(li);
        let wantedCount = wantedList.querySelectorAll('li').length;
        document.querySelector("#wanted-count").innerText = wantedCount;
        document.querySelector('#txt-villain').value = "";
}

/*  1.5) Create a function called caughtVillain that gets the value of the textbox and adds it to the UL.
         You also want to remove the caught villain from the wanted list.
         You also want to update the wanted and caught counts next to the h2 tags.
     */

document.querySelector('#btn-caught').addEventListener('click', caughtVillain);

function caughtVillain() {
        let villain = document.querySelector('#txt-villain').value;
        let li = document.createElement("li");
        li.innerText = villain;
        caughtList.appendChild(li);

        // Remove Caught Villain from Wanted List
        wantedVillains = wantedList.querySelectorAll('li');
        for (let i = 0; i < wantedVillains.length; i++) {
                if (wantedVillains[i].innerText === villain) {
                        wantedVillains[i]
                        .remove();
                }
        }
        
        // Update Caught Count
        let caughtCount = caughtList.querySelectorAll('li').length;
        document.querySelector("#caught-count").innerText = caughtCount;

        // Update Wanted Caught
        let wantedCount = wantedList.querySelectorAll('li').length;
        document.querySelector("#wanted-count").innerText = wantedCount;

        // Reset Text Box
        document.querySelector('#txt-villain').value = "";
}

/* 1.6) Create a function called getTotal that displays the total number of villains that are on both lists.
        You should display it in the #item-count
        Tip: You need to set the className of the total-area to just "total-area" for it to show up.
*/


/* 1.7) Create a function called getStatus that searches all li elements for the villain the user is looking for.
        You will need to find the parent element of the li once there is a match.
        Whichever list the villain is on, create an alert message.
*/



/* 1.8) Bind all the clicks to the appropriate inputs and functions by using event listeners  */
