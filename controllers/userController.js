const express = require("express");
const db = require("../models");
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');

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

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (!email.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        db.User.create({
          email: email,
          password: hashedPassword,
        })
          .then((newUser) => {
            res.json(newUser);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to signup.",
            });
          });
      })
      .catch((err) => {
        res.status(500);
      });
  }
});

router.post("/login", (req, res) => {
  // Pull user provided email address and password from the body.
  const { email, password } = req.body;
  // See if there is a matching user in the database.
  db.User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        console.log(foundUser);
        console.log("Hashed password from DB", foundUser.password);
        console.log("Plain text password from user", password);
        // If there is a matching user, compare the plaintext password with the stored, hashed password.
        bcrypt
          .compare(password, foundUser.password)
          .then(function (result) {
            // result == true
            console.log("The passwords match: ", result);
            if (result) {
              // If the passwords match, send back success.
              // TODO: send a jwt back as data instead. DONE
              // TODO: lock down the token with a time frame
              res.json({
                error: false,
                data: null,
                message: "Successfully logged in.",
              });
            } else {
              // If the passwords don't match, send back an error.
              res.status(401).json({
                error: true,
                data: null,
                message: "Failed to sign in.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              error: true,
              data: null,
              message: "Failed to sign in.",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to sign in.",
      });
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