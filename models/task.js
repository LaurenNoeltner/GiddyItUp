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
TaskSchema.virtual("chore").get(function () {
    return `${this.task} ${this.description}`;
});

// AuthorSchema.virtual("numBooks").get(function(){
//     return this.books.length;
// })

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;