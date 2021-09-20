const headers = {
  Accept: "application/json",
  Authorization: "Bearer QekNlgXMfXmuGPWF_nSV",
};

let charId;
async function getCharacter(character) {
  const response = await fetch(
    "https://the-one-api.dev/v2/character?name=" + character,
    {
      headers: headers,
    }
  );
  const charData = await response.json();
  charId = charData.docs[0]._id;
}

let quotes;
async function getQuotes() {
  const response = await fetch(
    "https://the-one-api.dev/v2/character/" + charId + "/quote",
    {
      headers: headers,
    }
  );
  const quoteData = await response.json();
  quotes = quoteData;
}

let singlequote;
const showthequote = () => {
  singlequote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
  console.log(singlequote.dialog);
  characterQuote.innerHTML = singlequote.dialog;
};

const body = document.querySelector("body");
const mainContainer = document.createElement("div");
mainContainer.classList.add("content");
body.appendChild(mainContainer);

const title = document.createElement("h2");
title.innerHTML = "Lord of the Rings Quotes";
mainContainer.appendChild(title);

const subtitle = document.createElement("h3");
subtitle.innerHTML = "Choose a character:";
mainContainer.appendChild(subtitle);

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttonsdiv");
const gandalfButton = document.createElement("button");
gandalfButton.innerHTML = "Gandalf";
gandalfButton.classList.add("characterbutton");
const gollumButton = document.createElement("button");
gollumButton.innerHTML = "Gollum";
gollumButton.classList.add("characterbutton");
const gimliButton = document.createElement("button");
gimliButton.innerHTML = "Gimli";
gimliButton.classList.add("characterbutton");
const frodoButton = document.createElement("button");
frodoButton.innerHTML = "Frodo";
frodoButton.classList.add("characterbutton");

mainContainer.appendChild(buttonsDiv);
buttonsDiv.appendChild(gandalfButton);
buttonsDiv.appendChild(gimliButton);
buttonsDiv.appendChild(gollumButton);
buttonsDiv.appendChild(frodoButton);

const spacer = document.createElement("div");
spacer.classList.add("spacer");
const quoteDiv = document.createElement("div");
quoteDiv.classList.add("quotediv");
const characterQuote = document.createElement("div");
characterQuote.classList.add("quote");

mainContainer.appendChild(spacer);
mainContainer.appendChild(quoteDiv);
quoteDiv.appendChild(characterQuote);

async function getQuote(character) {
  await getCharacter(character);
  await getQuotes();
  showthequote();
}
gandalfButton.addEventListener("click", () => {
  console.log("you clicked Gandalf!");
  getQuote("Gandalf");
});

gollumButton.addEventListener("click", () => {
  console.log("you clicked Gollum!");
  getQuote("Gollum");
});

gimliButton.addEventListener("click", () => {
  console.log("you clicked Gimli!");
  getQuote("Gimli");
});

frodoButton.addEventListener("click", () => {
  console.log("you clicked Frodo!");
  getQuote("Frodo Baggins");
});
