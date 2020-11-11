import React, { Component, useState, useEffect } from 'react';
import Header from "../Header/Header";
// import ParentBounty from "../ParentBounty/ParentBounty";
import "./Bounty.css";
import API from "../utils/API";
import westernbackgroundimage3 from "../../images/westernbackgroundimage3.jpg";



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
            
            {/* <img src={westernbackgroundimage3} className={"backgroundimage"} alt="westernbackground" /> */}
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