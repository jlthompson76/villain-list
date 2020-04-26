////////////// Part 1 /////////////////////
/* 1.1) Set the classes of the inputs (buttons) to "btn" by using a loop */
let buttons = document.querySelectorAll('input[type="button"]');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "btn";
}

/*  1.2) Set the classes of the inputs (text) to txtBox by using a loop */
let textBoxes = document.querySelectorAll('input[type="text"]');
for (let i = 0; i < textBoxes.length; i++) {
    textBoxes[i].className = "txt-box";
}


/* 1.3) grab both <ul> that we are going to append <li> nodes to and store in variables */
let wantedList = document.querySelector('#wanted-list');
let caughtList = document.querySelector('#caught-list');


/* 1.4) Create a function called addVillain that gets the value of the textbox and adds it to the UL.
        You also want to update the wanted count next to the h2 tag.
        Tip: you can also set the value to the text input to an empty string when you're done.
*/
function addVillain() {
    let villain = document.querySelector("#txt-villain").value;
    let listElement = document.createElement('li');
    listElement.innerText = villain;
    wantedList.appendChild(listElement);

    let wantedVillains = document.querySelectorAll('#wanted-list li');
    document.querySelector("#wanted-count").innerText = `(${wantedVillains.length})`;
    document.querySelector("#txt-villain").value = "";
}

/*  1.5) Create a function called caughtVillain that gets the value of the textbox and adds it to the UL.
         You also want to remove the caught villain from the wanted list.
         You also want to update the wanted and caught counts next to the h2 tags.
     */

function caughtVillain() {
    let wantedVillains = document.querySelectorAll('#wanted-list li');
    let caughtVillain = document.querySelector('#txt-villain').value;

    for (let i = 0; i < wantedVillains.length; i++) {
        if (wantedVillains[i].innerText === caughtVillain) {
            let listElement = document.createElement('li');
            listElement.innerText = caughtVillain;
            //add the caught villain to the caught list
            caughtList.append(listElement);
            
            //remove the caught villain from wanted list
            wantedVillains[i].remove();
        }
    }

    let caughtVillains = document.querySelectorAll('#caught-list li');
    document.querySelector("#caught-count").innerText = `(${caughtVillains.length})`;

    wantedVillains = document.querySelectorAll('#wanted-list li');
    document.querySelector("#wanted-count").innerText = `(${wantedVillains.length})`;

    document.querySelector('#txt-villain').value = "";
}

/* 1.6) Create a function called getTotal that displays the total number of villains that are on both lists.
        You should display it in the #item-count
        Tip: You need to set the className of the total-area to just "total-area" for it to show up.
*/
function getTotal() {
    document.querySelector(".total-area").className = "total-area";

    let itemCount = document.querySelector('#item-count');
    let listItems = document.querySelectorAll('li');
    itemCount.textContent = `${listItems.length} losers on both lists` ;
    
}

/* 1.7) Create a function called getStatus that searches all li elements for the villain the user is looking for.
        You will need to find the parent element of the li once there is a match.
        Whichever list the villain is on, create an alert message.
*/
function getStatus() {
    let allVillains = document.querySelectorAll("li");
    let villainToGetStatus = document.querySelector("#txt-villain").value;
    let statusDiv

    for (let i = 0; i < allVillains.length; i++) {
        if (allVillains[i].innerText === villainToGetStatus) {
            statusDiv = allVillains[i].parentElement;
        }
    }
    if (statusDiv.id === "wanted-list") {
        alert(`What are you doing?? ${villainToGetStatus} is WANTED. Go get em!!`);
    } else {
        alert(`Boston can sleep easy tonight because ${villainToGetStatus} is locked up!`);
    }

    document.querySelector("#txt-villain").value = "";
}


/* 1.8) Bind all the clicks to the the appropriate inputs and functions by using event handlers  */
document.querySelector("#btn-add").addEventListener('click', addVillain);
document.querySelector("#btn-caught").addEventListener('click', caughtVillain);
document.querySelector("#btn-total").addEventListener('click', getTotal);
document.querySelector("#btn-status").addEventListener('click', getStatus);