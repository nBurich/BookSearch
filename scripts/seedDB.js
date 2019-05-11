const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    synopsis:
      "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
    date: new Date(Date.now())
  },
  {
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    synopsis:
      "Crazy Rich Asians is the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip, backbiting, and scheming that occurs when the heir to one of the most massive fortunes in Asia brings home his ABC (American-born Chinese) girlfriend to the wedding of the season.",
    date: new Date(Date.now())
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
