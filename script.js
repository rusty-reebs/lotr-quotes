const headers = {
  Accept: "application/json",
  Authorization: "Bearer QekNlgXMfXmuGPWF_nSV",
};

let quote;
fetch("https://the-one-api.dev/v2/quote", {
  headers: headers,
})
  .then(function (response) {
    // console.log(response.json());
    return response.json();
  })
  .then(function (response) {
    // quote = response.docs[0].dialog;
    quote = response;
    console.log(quote.docs[0].dialog);
  });
setTimeout(function () {
  fetch("https://the-one-api.dev/v2/character?_id=" + quote.docs[0].character, {
    headers: headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.docs[0].name);
    });
}, 300);

// });
//   .then(function (response) {
// quotes = response.json();
// quotes = response.json();
// quote = response.docs[Math.floor(Math.random() * quotes?.docs?.length)];
//   });

//   const quotes = response.json();
//   quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
//   console.log(quote);
// });
//   let character;
//   fetch("https://the-one-api.dev/v2/character?_id=" + quote.character, {
//     headers: headers,
//   }).then(function (response) {
//     console.log(response.json());
//     const characters = response.json();
//     character = characters.docs[0];
//     console.log(character.name);
//   });
