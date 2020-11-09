import React from 'react';

function Card(props) {
    return (
        <div>
            <CardHeading />
            <CardImg />
            <CardBody />
        <button
            onClick={handleView}
            className="btn btn-danger">Add</button>
            
        </div>
    );
}

export default Card;