const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    location: {
      type: String,
      trim: true,
      required: "Location is required",
    },
    task: {
      type: String,
      trim: true,
      required: "Task is required",
    },
    description: {
      type: String,
      trim: true,
      required: "Description is required",
    },
    points: {
      type: Number,
      trim: true,
      required: "Points is required",
    },
  },
  { toJSON: { virtuals: true } }
);

TaskSchema.virtual("chore").get(function () {
  return `${this.task} ${this.description}`;
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
