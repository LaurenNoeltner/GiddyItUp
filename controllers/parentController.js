const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Parent.find({})
    .populate("books")
    .then((foundParent) => {
      res.json(foundParent);
    });
});

router.get("/:id", (req, res) => {
  db.Parent.findOne({ _id: req.params.id }).then((foundParent) => {
    res.json(foundParent);
  });
});

router.post("/", (req, res) => {
  db.Parent.create(req.body).then((newParent) => {
    res.json(newParent);
  });
});

router.put("/:id", (req, res) => {
  db.Parent.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedParent) => {
      res.json(updatedParent);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.Parent.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;