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
    <div>
      <UserInput onAddUser={addUser}></UserInput>
      <Users items={users}/>
    </div>
  );
}

export default App;
