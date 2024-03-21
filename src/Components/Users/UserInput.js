import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from "./UserInput.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserInput = (props) => { 

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (e) => { 
        setName(e.target.value)
    }

    const ageChangeHandler = (e) => { 
        setAge(e.target.value)
    }


    function submitHandler(e){
        e.preventDefault()

        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
          }
        
        if (+age < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        const newUser = {
            name : name,
            age : age,
            id : Math.random().toString()
        };

        props.onAddUser(newUser);

        setName('');
        setAge('');

    }

    const errorHandler = () => {
        setError(null);
      };

    return(
        <React.Fragment>
            {error && (
                <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Username:</label>
                        <input type='text' value={name} onChange={nameChangeHandler}/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type='number' value={age} min="0" onChange={ageChangeHandler}></input>
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
 }

export default UserInput;