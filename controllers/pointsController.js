const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Points.find({ _id: "5faf3d071e12384bf094c8ce" })
    .populate("points")
    .then((foundPoints) => {
      res.json(foundPoints);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  db.Points.findOne({ _id: "5faf3d071e12384bf094c8ce" }).then((foundPoints) => {
    res.json(foundPoints);
  });
});

router.post("/", (req, res) => {
  db.Points.create(req.body).then((newPoints) => {
    res.json(newPoints);
  });
});

router.put("/:id", (req, res) => {
  let numberPoints = Object.keys(req.body)[0];
  db.Points.updateOne({
    id: "5faf3d071e12384bf094c8ce",
    points: numberPoints,
  })
    .then((updatedPoints) => {
      res.json(updatedPoints);
    })
    .then(console.log(numberPoints))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  db.Points.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log("deleted button" + req.params.id);
      res.json(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
