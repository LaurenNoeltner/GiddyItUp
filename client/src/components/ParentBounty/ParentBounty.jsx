import React, { useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";
import "./ParentBounty.css";
// import router from "../../../../controllers/taskController";


// Make these functions: V V
// handleInputChange
// handleFormSubmit
// handleClick




//note:
//add name attr and handleInputChange to all inputs
//add handleClick to submit button

function ParentBounty() {
    //set component init state
    const [tasks, setTasks] = useState([]);
    const[formObject, setFormObject] = useState ({});

    //load all tasks
    useEffect(() => {
        loadTasks();
    }, [])

    //load all tasks and sets them to tasks
    function loadTasks () {
        router.getTasks()
            .then(res =>
                setTasks(res.data)
            )
            .catch(err => console.log(err));
    };

    //handles updating component state when user types into input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    
    // When the form is submitted, use the API.saveTask method to save the task data
    // Then reload tasks from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.task && formObject.points) {
            router.saveTask({
                taskName: formObject.task,
                location: formObject.location,
                description: formObject.description,
                reward: formObject.points
            })
                .then(res => loadTasks())
                .catch(err => console.log(err));
        }
    }


        return (
            <>
            <div className="row" >
                <div className="col-md-4"></div>
                <div id="boardTitle" className="col-md-3">Bounty Board</div>
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="bountyContainer col-md-8">
                    <div className="row" id="row1">
                        <div className="taskContainer col-md-3">
                            Reward: 45 silver | Walk Dogs
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                            2
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                            3
                        </div>
                    </div>
                    <div className="row" id="row2">
                        <div className="taskContainer col-md-3">
                           4
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                           5 
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                           6 
                        </div>
                    </div>
                    <div className="row" id="row3">
                        <div className="taskContainer col-md-3">
                            7
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                            8
                        </div>
                        <div className="col-md-1"></div>
                        <div className="taskContainer col-md-3">
                            9
                        </div>
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
                        <div id="formTitle" className="col-md-5">Add a Bounty!</div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Task Name</label>
                            <input name="task" onChange={handleInputChange} id="taskInput" placeholder="Task name?" required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Location</label>
                            {/* //add name and onChange={handleInputChange} for each input */}
                            <input name="location" id="locationInput" placeholder="Where?..." required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Description</label>
                            <input name="description" id="descriptionInput" placeholder="Describe the task..." required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Reward</label>
                            <input name ="points" id="rewardInput" placeholder="Silver Points..." required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            {/* add onClick={handleFormSubmit} */}
                            <button onClick={handleFormSubmit} id="addTask" className="submit">Add Task</button>
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