import React, { Component, useState, useEffect } from 'react';
import Header from "../Header";
import { TextArea } from "../KidBounty.js";
import "./Bounty.css";



    
    



function Bounty() {

    const [tasks, setTasks] = useState([]);
    const [formObject, setFormObject] = useState ({});

    
        return (
            <>
           
            <div className="row" >
                <div className="col-md-4"></div>
                <div id="boardTitle"className="col-md-3">Bounty Board</div>
                <div className="col-md-4"></div>
            </div>
           
            <div className="row">
                <div className="col-md-2"></div>
                <div className="bountyContainer col-md-8">
                    <div className="row" id="row1">
                    {tasks.map(task => (
                        <>
                        <div key={task.identifier} className="taskContainer col-md-3">
                            {task.task} | Reward: {task.points}
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