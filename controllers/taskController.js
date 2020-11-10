const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Task.find({})
    .populate("tasks")
    .then((foundTask) => {
      res.json(foundTask);
    });
});

router.get("/:id", (req, res) => {
  db.Task.findOne({ _id: req.params.id }).then((foundTask) => {
    res.json(foundTask);
  });
});

router.post("/", (req, res) => {
  db.Task.create(req.body).then((newTask) => {
    res.json(newTask);
  });
});

router.put("/:id", (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedTask) => {
      res.json(updatedTask);
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
  db.Task.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("deleted button" + req.params.id);
    res.json(result).catch((err) => console.log(err));
  });
});

module.exports = router;
