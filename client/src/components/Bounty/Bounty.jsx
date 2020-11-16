import React, { useState, useEffect } from 'react';

import "./Bounty.css";
import API from "../utils/API";
import KidProfile from '../KidProfile/KidProfile';






function Bounty() {

    const [tasks, setTasks] = useState([]);
    

    //load all tasks
    useEffect(() => {
        loadTasks();
    }, [])

    //load all tasks and sets them to tasks
    function loadTasks() {
        API.getTasks()
            .then((res) => {
                console.log("This is from bounty.js", res);
                setTasks(res.data)
            })
            .catch((err) => console.log(err));
    };

    
    return (
        <>
        <div className="bounty-page">
        <div className="container">

                <KidProfile />

                <div className="row" >
                    <div className="col-md-3"></div>
                    <div id="boardTitle" className="col-md-5">Bounty Board</div>
                    <div className="col-md-3 ">
                    </div>
                </div>

                <div className="row bounty-container">
                    <div className="col-md-2"></div>
                    <div className="bountyContainer col-md-8">
                        <div className="row" id="row1">
                            {tasks.map(task => (
                                <>
                                    <div key={task.identifier} className="taskContainer col-md-3">
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
                                     </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row bounty-space">

                </div>
            </div>

        </div>
            

        </>
    );
}


export default Bounty;