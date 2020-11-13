const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointsSchema = new Schema(
  {
    points: {
      type: String,
      trim: true,
      required: "Points is required",
    },
  },
  { toJSON: { virtuals: true } }
);

// userSchema.virtual("domain").get(function () {
//   return this.email.slice(this.email.indexOf("@") + 1);
// });
PointsSchema.virtual("score").get(function () {
  return `${this.points}`;
  console.log(this.points);
});

// AuthorSchema.virtual("numBooks").get(function(){
//     return this.books.length;
// })

const Points = mongoose.model("Points", PointsSchema);

module.exports = Points;
