const express = require("express");
const router = express.Router();
const db = require("../models");

// TODO: Build an authentication/authorization controller.

router.get("/", (req, res) => {
    // TODO: Restrict which fields are returned. NO PASSWORD!
  db.User.find({})
    .populate("books")
    .then((foundUsers) => {
      res.json(foundUsers);
    });
});

router.get("/:id", (req, res) => {
    // TODO: Restrict which fields are returned. NO PASSWORD!
  db.User.find({ _id: req.params.id }).then((foundUser) => {
    res.json(foundUser);
  });
});

router.post("/", (req, res) => {
  db.User.create(req.body).then((newUser) => {
    res.json(newUser);
  });
});

router.put("/:id", (req, res) => {
    // TODO: Restrict which fields are editable
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedUser) => {
      res.json(updatedUser);
    }
  );
});

router.delete("/:id", (req, res) => {
    // TODO: Figure out how to restrict account deletion.
  db.User.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;