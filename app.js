"use strict";

const express = require("express");
const app = express();
const PORT_CHECK = 8000;
const ERROR = 400;
const DRINKS = {
  "latte": "espresso + milk",
  "macchiato": "espresso + milk + dollop of foam",
  "doppio": "two shots of espresso",
  "americano": "espresso + water",
  "drip": "brewed coffee",
  "pourover": "hot water + coffee grounds",
  "shaken espresso": "syrup + ice + espresso",
  "cappucino": "espresso + some milk + milk foam on top"
};
let cats = [
  {
    "image": "images/cat.png",
    "alt": "cat latte art"
  },
  {
    "image": "images/shutup.png",
    "alt": "shut up cat"
  }
];
let others = [
  {
    "image": "images/bird.png",
    "alt": "bird latte art"
  },
  {
    "image": "images/frog.png",
    "alt": "frog latte art"
  },
  {
    "image": "images/snoopy.jpg",
    "alt": "snoopy latte art"
  }
];

app.get("/friend/:category", function(req, res) {
  let param = req.params["category"];
  if (param === "cats") {
    res.json(getCat());
  } else {
    res.json(getOther());
  }
});

/**
 * this function gets a random stuffed animal from the json variables depending on the specified
 * category
 * @param {object} category - either bears, birds, or etc
 * @returns {object} - a random stuffed animal with image and alt information
 */
function getCat() {
  let random = Math.floor(Math.random() * 2);
  return cats[random];
}

/**
 * this function gets a random stuffed animal from the json variables depending on the specified
 * category
 * @param {object} category - either bears, birds, or etc
 * @returns {object} - a random stuffed animal with image and alt information
 */
function getOther() {
  let random = Math.floor(Math.random() * 3);
  return others[random];
}

app.get("/drinks", (req, res) => {
  let word = req.query.word;
  if (word) {
    let definition = DRINKS[word];
    if (definition) {
      res.json({
        word: definition
      });
    } else {
      res.type("text");
      res.status(ERROR);
      res.send("this drink does not exist in our recipe book");
    }
  } else {
    res.type("text");
    res.status(ERROR);
    res.send("missing words!");
  }
});

app.use(express.static("public"));
const PORT = process.env.PORT || PORT_CHECK;
app.listen(PORT);