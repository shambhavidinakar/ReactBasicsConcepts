import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const App = () => {
  const [addedUsers, setAddedUsers] = useState([]);


  const addUserHandler = (Uname,Uage) => {
    setAddedUsers( (prevUsers) => {
      return [...prevUsers,{name:Uname,age:Uage}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={addedUsers}/>
    </div>
  );
}

export default App;
