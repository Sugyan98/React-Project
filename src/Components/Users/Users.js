import React from 'react';

import classes from "./Users.module.css"
import Card from '../UI/Card';

const Users = (props) => { 



    return(
        <Card className={classes.users}>
            <ul >

                {props.items.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                    ))}
            </ul>
        </Card>
    )
 }

 export default Users;