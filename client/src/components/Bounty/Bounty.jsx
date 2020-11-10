import React, { useState, useEffect } from 'react';

// import ParentBounty from "../ParentBounty/ParentBounty";
import "./Bounty.css";
import API from "../utils/API"



function Bounty() {

    const [tasks, setTasks] = useState([]);
    const [formObject, setFormObject] = useState ({});

        //load all tasks
        useEffect(() => {
            loadTasks();
        }, [])
    
        //load all tasks and sets them to tasks
        function loadTasks () {
            API.getTasks()
                .then(res => {
                    console.log(res);
                    setTasks(res.data)
                    // setTasks([{name: "Walk dog", points: 5}, {name: "Walk dog", points: 5}, {name: "Walk dog", points: 5}])
                })
                .catch(err => console.log(err));
        };

          // Deletes a book from the database with a given id, then reloads books from the db
        function deleteTask(id) {
            API.deleteTask(id)
            .then(res => loadTasks())
            .catch(err => console.log(err));
        }
    
    
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
                API.saveTask({
                    task: formObject.task,
                    location: formObject.location,
                    description: formObject.description,
                    points: formObject.points
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
                    {tasks.map(task => (
                        <>
                        <div key={task.identifier} className="taskContainer col-md-3">
                            <div>
                                {task.task} | Reward: {task.points}
                            </div>
                            <hr />
                            <div>
                                {task.location} | {task.description}
                            </div>
                            <button onClick={() => deleteTask(task._id)}>
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
              
            </>  
        );
}


export default Bounty;