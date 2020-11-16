import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function () {
    return axios.get("/api/tasks");
  },
  // Gets the tasks with the given id
  getTaskById: function (id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function (id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function (taskData) {
    return axios.post("/api/tasks", taskData);
  },

  // points API calls
  getPoints: function () {
    return axios.get("/api/points/5faf3d071e12384bf094c8ce");
  },
  // Saves to the database
  savePoints: function (pointData) {
    return axios.post("/api/points/", pointData);
  },
  putPoints: function (id, pointData) {
    return axios.put("/api/points/:id", pointData);
  },
};
