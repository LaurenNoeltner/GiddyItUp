import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class ParentBounty extends Component {
    render() {
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
            <div className="row addTaskBox">
                <div className="col-md-2"></div>
                <div id="taskForm" className="col-md-7">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id= "formTitle" className="col-md-5">Add a Bounty!</div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Task Name</label>
                            <input id="taskInput" title="What is the task name?" required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Location</label>
                            <input id="locationInput" title="Where does it need to be done?" required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Description</label>
                            <input id="descriptionInput" title="Describe the task..." required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <label>Reward</label>
                            <input id="rewardInput" placeholder="Silver Points..." required></input>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div id="formBox" className="col-md-5">
                            <button className="submit">Add Task</button>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            </>
        );
    }
}

export default ParentBounty;