const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last name is required",
    },
    age: {
        type: String,
        trim: true,
        required: "Age is required",
      },
      avatar: {
        type: String,
        trim: true        
      },
  },
  { toJSON: { virtuals: true } }
);

ChildSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
