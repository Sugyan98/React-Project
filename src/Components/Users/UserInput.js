import React, { useState , useRef} from 'react';

import Card from '../UI/Card';
import classes from "./UserInput.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserInput = (props) => { 

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeNameInputRef = useRef();
    
    const [error, setError] = useState();

    function submitHandler(e){
        e.preventDefault()

        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const collegeName = collegeNameInputRef.current.value;

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
            collegeName : collegeName,
            id : Math.random().toString()
        };

        props.onAddUser(newUser);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeNameInputRef.current.value = '';

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
                        <input type='text' ref={nameInputRef}/>
                    </div>
                    <div>
                        <label>Age (Years):</label>
                        <input type='number' ref={ageInputRef}></input>
                    </div>
                    <div>
                        <label>College Name:</label>
                        <input type='text' ref={collegeNameInputRef}></input>
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
 }

export default UserInput;