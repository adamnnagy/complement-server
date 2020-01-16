const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You look like shit today",
    "That dress is bad",
    "Do you even lift brah?",
    "You suck ass amigo",
    "You smell like poo poo",
    "You can't even pee on your own, how cool is that?",
    "You make Jesus cry",
    "You're an abomination",
    "Monkey balls."
  ];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random()* insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
    res
      .json({
        complement: getRandomInsult()
      })
      .end(); 
  });
  

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");