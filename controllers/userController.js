const express = require("express");
const db = require("../models");
const jwt = require ('jsonwebtoken');

const router = express.Router();

router.get("/user", (req, res) => {
  db.User.find({}).then((allUser) => {
    console.log(allUser);
    res.json({ allUser: allUser });
  }).catch(error => {
    console.log(error)
  })
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(typeof req.params.id);
  if (!req.params.id || req.params.id === "null" || req.params.id === "undefined") {
    return res.status(500).json({
      error: true,
      data: null,
      message: "no id provided.",
    });

  }
  db.User.findById(req.params.id)
    .then((foundUser) => {
      console.log(foundUser);
      res.json({
        error: false,
        data: foundUser,
        message: "Successfully found user.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "there has been an error.",
      });
    });
});

router.post("/sign-up", (req, res) => {
  const newUser = (req.body);
  db.User.create(newUser).then((newUser) => {
    res.json({
      error: false,
      data: newUser,
      message: "Successfully created user.",
    });
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  db.User.findOne({ email: req.body.email }).then((foundUser) => {
    if (foundUser.password === req.body.password) {
      // res.json(foundUser);
      const token = jwt.sign({ data: foundUser });
      res.json({
        error: false,
        data: { foundUser, token },
        message: "Successfully logged in user.",
      });
      console.log(token);
    }
    else {
      res.status(401).json("User not authorized");
    }
  });
});
// the total route /api/user/:id
router.put("/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id,
    req.body, { new: true })
    .then((updatedUser) => {
      console.log(updatedUser);
      res.json({
        error: false,
        data: updatedUser,
        message: "Successfully updated profile.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update profile.",
      });
    });
});

// Delete route works now.
// the total route /api/user/:id
router.delete("/:id", (req, res) => {
  db.User.findByIdAndDelete({ _id: req.params.id })
    .then((deletedUser) => {
      console.log(deletedUser);
      res.json({
        error: false,
        data: deletedUser,
        message: "Successfully deleted profile.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to delete profile.",
      });
    });
});

module.exports = router;