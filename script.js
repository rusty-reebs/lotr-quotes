const headers = {
  Accept: "application/json",
  Authorization: "Bearer QekNlgXMfXmuGPWF_nSV",
};
//! The code below works
// let quote;
// fetch("https://the-one-api.dev/v2/quote", {
//   headers: headers,
// })
//   .then(function (response) {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(function (response) {
//     // quote = response.docs[0].dialog;
//     quote = response;
//     console.log(quote.docs[0].dialog);
//   });
// setTimeout(function () {
//   fetch("https://the-one-api.dev/v2/character?_id=" + quote.docs[0].character, {
//     headers: headers,
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response.docs[0].name);
//     });
// }, 1000);

// let gandalf;
// let quotes;
// fetch("https://the-one-api.dev/v2/character?name=Gandalf", {
//   headers: headers,
// })
//   .then((response) => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((response) => {
//     gandalf = response;
//   });
// setTimeout(function () {
//   fetch(
//     "https://the-one-api.dev/v2/character/" + gandalf.docs[0]._id + "/quote",
//     {
//       headers: headers,
//     }
//   )
//     .then((response) => {
//       // console.log(response.json());
//       return response.json();
//     })
//     .then((response) => {
//       quotes = response;
//     });
// }, 1000);

// function to fetch random quote by character

let characterObj;
const getCharacter = (character) => {
  fetch("https://the-one-api.dev/v2/character?name=" + character, {
    headers: headers,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      characterObj = response;
      //   console.log(characterObj);
    });
};

let quotes;
const getQuotes = () => {
  fetch(
    "https://the-one-api.dev/v2/character/" +
      characterObj.docs[0]._id +
      "/quote",
    {
      headers: headers,
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response.json());
      quotes = response;
    });
};

const showthequote = () => {
  let singlequote =
    quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
  console.log(singlequote.dialog);
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
characterQuote.innerHTML = "Run, you fools!";

mainContainer.appendChild(spacer);
mainContainer.appendChild(quoteDiv);
quoteDiv.appendChild(characterQuote);

gandalfButton.addEventListener("click", () => {
  console.log("you clicked Gandalf!");
  getCharacter("Gandalf");
  setTimeout(function () {
    console.log("waiting");
    getQuotes();
  }, 2000);
  //   setTimeout(showthequote, 2000);
});

gollumButton.addEventListener("click", () => {
  console.log("you clicked Gollum!");
  getCharacter("Gollum");
  setTimeout(function () {
    console.log("waiting");
    getQuotes();
  }, 2000);
  //   setTimeout(showthequote, 2000);
});

gimliButton.addEventListener("click", () => {
  console.log("you clicked Gimli!");
  getCharacter("Gimli");
  setTimeout(function () {
    console.log("waiting");
    getQuotes();
  }, 2000);
  //   setTimeout(showthequote, 2000);
});

frodoButton.addEventListener("click", () => {
  console.log("you clicked Frodo!");
  getCharacter("Frodo");
  setTimeout(function () {
    console.log("waiting");
    getQuotes();
  }, 2000);
  //   setTimeout(showthequote, 2000);
});
