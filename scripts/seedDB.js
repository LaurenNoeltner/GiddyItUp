const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/gittyitupDB"
);

const taskSeed = [
    {
        location: "Bedroom",
        task: "Vacuum room",
        description:
            "Deputy must fight dust bunnies",
        points: "45"

    },
    {
        location: "Bathroom",
        task: "Scrub sink",
        description:
            "Deputy must squash the evil fungi lurking in the sink.",
        points: "45"

    },
    {
        location: "Bedroom",
        task: "Make bed",
        description:
            "Deputy must fight the sleep monster and make the bed before school",
        points: "45"

    },
]

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
