import React from 'react';

function CardBody(props) {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h3>Bounty: {user.description}</h3>
        </div>
    );
}

export default CardBody;