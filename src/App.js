import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const App = () => {
  const [addedUsers, setAddedUsers] = useState([]);


  const addUserHandler = (Uname,Uage,id) => {
    setAddedUsers( (prevUsers) => {
      return [...prevUsers,{name:Uname,age:Uage,id:id}]
    });
  }

  return (
   <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={addedUsers}/>
    </>
  );
}

export default App;
