const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Points.find({})
    .then((foundPoints) => {
      res.json(foundPoints);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  db.Points.findOne({ _id: req.params.id }).then((foundPoints) => {
    res.json(foundPoints);
  });
});

router.post("/", (req, res) => {
  db.Points.create(req.body).then((newPoints) => {
    res.json(newPoints);
  });
});

router.put("/:id", (req, res) => {
  db.Points.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedPoints) => {
      res.json(updatedPoints);
    }
  );
});

// router.delete("/:id", (req, res) => {
//   db.Task.findByIdAndDelete({_id:req.params.id}).then((result) => {
//     console.log("delete function XXXXXXXXXXX");
//     res.json(result).catch((err) => console.log(err));
//   });
// });

router.delete("/:id", (req, res) => {
  db.Points.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log("deleted button" + req.params.id);
      res.json(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
