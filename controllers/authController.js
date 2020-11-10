const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const db = require("../models");

// Sign UP

router.post("/api/signup", (req, res) => {
  const { emailAddress, password } = req.body;
  //   console.log(emailAddress);
  //   console.log(password);
  if (!emailAddress.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        // console.log(hashedPassword);
        db.User.create({
          emailAddress: emailAddress,
          password: hashedPassword,
        })
          .then((newUser) => {
            const token = jwt.sign(
              {
                _id: newUser._id,
                emailAddress: newUser.emailAddress,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
              },
              process.env.SECRET
            );
            res.json({
              error: false,
              data: token,
              message: "Successfully signed up.",
            });
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

// Login

router.post("/api/login", (req, res) => {
  // Pull user provided email address and password from the body.
  const { emailAddress, password } = req.body;
  // See if there is a matching user in the database.
  db.User.findOne({ emailAddress: emailAddress })
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
              const token = jwt.sign(
                {
                  _id: foundUser._id,
                  emailAddress: foundUser.emailAddress,
                  firstName: foundUser.firstName,
                  lastName: foundUser.lastName,
                },
                process.env.SECRET
              );
              res.json({
                error: false,
                data: token,
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

module.exports = router;
