import React from 'react';
import ShowUser from './ShowUser';

function UserList() {
    const users = [
        {
            name: 'BOCIAN',
            telNumber: '555-555-551',
            countryBorn: 'Maroko'
        },
        {
            name: 'STARY ',
            telNumber: '555-555-552',
            countryBorn: 'Kanada'
        },
        {
            name: 'KRETYN',
            telNumber: '555-555-553',
            countryBorn: 'Hiszpania'
        },
        {
            name: 'GITSON',
            telNumber: '555-555-554',
            countryBorn: 'Korea'
        },
        {
            name: 'Mike Tyson',
            telNumber: '555-555-555',
            countryBorn: 'UK'
        }
    ];

    return (
        <div>
            <hr></hr>
            {users.map((user, index) => (
                <ShowUser
                    key={index}
                    name={user.name}
                    telNumber={user.telNumber}
                    countryBorn={user.countryBorn}
                />
            ))}
            <hr></hr>
        </div>
    );
}

export default UserList;
