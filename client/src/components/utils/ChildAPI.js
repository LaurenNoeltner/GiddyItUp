import axios from "axios";

export default {
  // Gets all tasks
  getChild: function () {
    return axios.get("/api/child");
  },
  // Gets the tasks with the given id
  getChildById: function (id) {
    return axios.get("/api/child/" + id);
  },
  // Deletes the task with the given id
  deleteChild: function (id) {
    return axios.delete("/api/child/" + id);
  },
  // Saves a task to the database
  saveChild: function (childData) {
    return axios.post("/api/child", childData);
  },
};
