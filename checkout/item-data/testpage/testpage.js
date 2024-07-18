"use strict";

const cardOutput = document.getElementById("cardOutput");

window.onload = () =>{
    loadCards(candyData);
}


function createCards(data){

const cardCol = document.createElement("div");
cardCol.classList.add("col");

// Create card container div
const card = document.createElement('div');
card.className = 'card';
card.style.width = '18rem';

// Create image element
const img = document.createElement('img');
img.className = 'card-img-top';
img.src = data.img; // Add your image source here

// Append image to card
card.appendChild(img);

// Create card body div
const cardBody = document.createElement('div');
cardBody.className = 'card-body';

// Create card title
const cardTitle = document.createElement('h5');
cardTitle.className = 'card-title';
cardTitle.textContent = data.name;

// Create card text
const cardText = document.createElement('p');
cardText.className = 'card-text';
cardText.textContent = data.maxQuanity + " " + data.unitOfMeasurement;

// Create link button
const link = document.createElement('a');
link.className = 'btn btn-primary';
link.href = '#';
link.textContent = 'Add Candy';

// Append title, text, and button to card body
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(link);

// Append card body to card
card.appendChild(cardBody);

cardCol.appendChild(card);

return cardCol;
}


function loadCards(candyData){
    for(let candy of candyData){
        cardOutput.appendChild(createCards(candy));
    }
}