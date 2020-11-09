const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Child.find({})
    .populate("books")
    .then((foundChild) => {
      res.json(foundChild);
    });
});

router.get("/:id", (req, res) => {
  db.Child.findOne({ _id: req.params.id }).then((foundChild) => {
    res.json(foundChild);
  });
});

router.post("/", (req, res) => {
  db.Child.create(req.body).then((foundChild) => {
    res.json(foundChild);
  });
});

router.put("/:id", (req, res) => {
  db.Child.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedChild) => {
      res.json(updatedChild);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.Child.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;