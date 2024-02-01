import React from 'react';

function ShowUser(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Telephone Number: {props.telNumber}</p>
            <p>Country of Birth: {props.countryBorn}</p>
            <hr/>
        </div>
    );
}

export default ShowUser;
