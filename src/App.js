import React, {useState} from 'react';
import UserInput from './Components/Users/UserInput';
import Users from './Components/Users/Users';

// let emptyarr=[]

function App() {

  const[users,setUsers] = useState([]);

  const addUser = (newUser) => { 
    setUsers((prevState) => [newUser,...prevState]);
   }

  return (
    <React.Fragment>
      <UserInput onAddUser={addUser}></UserInput>
      <Users items={users}/>
    </React.Fragment>
  );
}

export default App;
