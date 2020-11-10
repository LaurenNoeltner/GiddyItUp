import React, { Component } from 'react';
import BountyBoard from './BountyBoard';
import { TextArea } from './BountyBoard.js';



class Bounty extends Component {
    render() {
        return (
            <>
            < Header />
            <div className="row" >
                <div className="col-md-4"></div>
                <div id="boardTitle"className="col-md-3">Bounty Board</div>
                <div className="col-md-4"></div>
            </div>
            < TextArea />
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
            </>
        );
    }
}

export default Bounty;