import axios from "axios";

export default {

    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },

    login: function (email) {
        return axios.post("/api/user/login", email)
    },

    signup: function (userData) {
        return axios.post("/api/user/signup", userData)
    },

    editUser: function (id, body) {
        return axios.put("/api/user/" + id, body);
    },

    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    }
}