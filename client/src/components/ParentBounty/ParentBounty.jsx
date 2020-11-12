import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "./ParentBounty.css";
import "../Bounty/Bounty.css";
import API from "../utils/API";
import Counter from "../Counter/Counter";


const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue];
  };


function ParentBounty(props) {


  const [tasks, setTasks] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [points, setPoints] = useState(0);
  ///this block is debatably useful, but not working
  const [value, setValue] =useStateWithLocalStorage(
    'points'
  );

  const onChange = event => setValue(event.target.value);
  ///// ^^

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
      })
      .catch((err) => console.log(err));
  }

    // Deletes a task from the database with a given id, then reloads task from the db
    function deleteTask(id) {
        API.deleteTask(id)
        .then(res => loadTasks())
        .catch(err => console.log(err));
        
    }



    // TODO:  modify to make points increment every time
    // handleIncrement = (props) => {
        
    //     this.setState({ points: this.state.points + props.points })
    //     API.deleteTask()
    //     .then(res => loadTasks())
    //     .catch(err => console.log(err));
        
    // }

    function handleIncrement (task) {
      // We always use the setState method to update a component's state
      let newPoints = points;
      newPoints = parseInt(newPoints) + parseInt(task.points);
      console.log(newPoints);
      setPoints(newPoints);
      // console.log(props);
      // props.state.points = tasks;
      console.log(tasks, "this is supposed to say tasks");
      deleteTask(task._id);
      
    };






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
    <div className="bounty-page">
    <div className="container"></div>
        <div className="row">
            <div className="col-md-3"></div>
            <div id="boardTitle" className="col-md-5">
            Bounty Board
            </div>
            <div className="col-md-3">
                <h3>Points: {points}</h3>
            </div>
        </div>

        <div className="row bounty-container">
            <div className="col-md-2"></div>
            <div className="bountyContainer col-md-8">
            <div className="row" id="row1">
                {tasks.map((task) => (
                <>
                    <div key={task.identifier} className="taskContainer col-md-3">
                        <button className="delete-task" onClick={() => deleteTask(task._id)}>
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
                        <div id="taskPoints">Bounty: ${task.points}</div>   
                        <hr />
                        <div id="taskName">  
                            <strong>{task.task}</strong>  
                        </div>
                        <hr />
                        <div id="placeText">
                            <strong>Place:</strong> {task.location} 
                        </div>
                        <div id="notesText"><strong>Notes: </strong>{task.description}</div>
                        <button className="check-btn" onClick={() => handleIncrement(task)}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                            </svg>
                        </button>
                    </div>
                </>
                ))}
            </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </div>

      <br />
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