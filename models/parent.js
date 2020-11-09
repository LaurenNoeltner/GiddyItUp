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

// userSchema.virtual("domain").get(function () {
//   return this.email.slice(this.email.indexOf("@") + 1);
// });
ParentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// AuthorSchema.virtual("numBooks").get(function(){
//     return this.books.length;
// })

const Parent = mongoose.model("Parent", ParentSchema);

module.exports = Parent;
