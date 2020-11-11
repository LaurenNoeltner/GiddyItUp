import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "./ParentBounty.css";
import "../Bounty/Bounty.css";
import API from "../utils/API";

function ParentBounty() {
  //set component init state
  const [tasks, setTasks] = useState([]);
  const [formObject, setFormObject] = useState({});

  //load all tasks
  useEffect(() => {
    loadTasks();
  }, []);

  //load all tasks and sets them to tasks
  function loadTasks() {
    API.getTasks()
      .then((res) => {
        console.log(res);
        setTasks(res.data);
        // setTasks([{name: "Walk dog", points: 5}, {name: "Walk dog", points: 5}, {name: "Walk dog", points: 5}])
      })
      .catch((err) => console.log(err));
  }

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteTask(id) {
        API.deleteTask(id)
        .then(res => loadTasks())
        .catch(err => console.log(err));
        
    }
    // TODO:  modify to make points increment every time

    // function confirmTask(id) {
    //     const currentPoints = 
    //     API.deleteTask(id)
    //     .then(res => loadTasks())
    //     .catch(err => console.log(err));
        
    // }

  //handles updating component state when user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveTask method to save the task data
  // Then reload tasks from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.task && formObject.points) {
      API.saveTask({
        task: formObject.task,
        location: formObject.location,
        description: formObject.description,
        points: formObject.points,
      })
        .then((res) => loadTasks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div id="boardTitle" className="col-md-3">
          Bounty Board
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="bountyContainer col-md-8">
          <div className="row" id="row1">
            {tasks.map((task) => (
              <>
                <div key={task.identifier} className="taskContainer col-md-3">
                  <div>
                    {task.task} | Reward: {task.points}
                  </div>
                  <hr />
                  <div>
                    {task.location} | {task.description}
                    <button onClick={() => deleteTask(task._id)}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-x"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <hr />
      <form className="row addTaskBox">
        <div className="col-md-2"></div>
        <div id="taskForm" className="col-md-7">
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formTitle" className="col-md-5">
              Add a Bounty!
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formBox" className="col-md-5">
              <label>Task Name</label>
              <input
                name="task"
                onChange={handleInputChange}
                id="taskInput"
                placeholder="Task name?"
                required
              ></input>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formBox" className="col-md-5">
              <label>Location</label>
              <input
                name="location"
                onChange={handleInputChange}
                id="locationInput"
                placeholder="Where?..."
                required
              ></input>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formBox" className="col-md-5">
              <label>Description</label>
              <input
                name="description"
                onChange={handleInputChange}
                id="descriptionInput"
                placeholder="Describe the task..."
                required
              ></input>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formBox" className="col-md-5">
              <label>Reward</label>
              <input
                name="points"
                onChange={handleInputChange}
                id="rewardInput"
                placeholder="Silver Points..."
                required
              ></input>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div id="formBox" className="col-md-5">
              {/* add onClick={handleFormSubmit} */}
              <button
                onClick={handleFormSubmit}
                id="addTask"
                className="submit"
              >
                Add Task
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </form>
    </>
  );
}

export default ParentBounty;
