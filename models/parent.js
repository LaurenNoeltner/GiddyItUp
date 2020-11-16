const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParentSchema = new Schema(
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
  },
  { toJSON: { virtuals: true } }
);

ParentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Parent = mongoose.model("Parent", ParentSchema);

module.exports = Parent;
