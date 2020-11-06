import React, { Component } from 'react';

class Bounty extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row" id="row1">
                        <div className="col-md-4">
                            1
                        </div>
                        <div className="col-md-4">
                            2
                        </div>
                        <div className="col-md-4">
                            3
                        </div>
                    </div>
                    <div className="row" id="row2">
                        <div className="col-md-4">
                            4
                        </div>
                        <div className="col-md-4">
                           5 
                        </div>
                        <div className="col-md-4">
                           6 
                        </div>
                    </div>
                    <div className="row" id="row3">
                        <div className="col-md-4">
                            7
                        </div>
                        <div className="col-md-4">
                            8
                        </div>
                        <div className="col-md-4">
                            9
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                
            </div>
        );
    }
}

export default Bounty;