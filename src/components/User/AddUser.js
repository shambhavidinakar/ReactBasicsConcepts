import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const addAgeHandler = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setErrorContent("No Name or Age entered");
      return;
    }
    if (+age < 0) {
      setErrorContent("Invalid age entered");
      return;
    }
    props.onAddUser(name, age);
    setAge("");
    setName("");
  };

  const resetErrorHandler = () =>{
      setErrorContent('')
  }
  
  return (
    <div>
      {errorContent && <Modal message={errorContent} onCancel={resetErrorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" value={name} onChange={addUserHandler}></input>
          <label>Age</label>
          <input type="number" value={age} onChange={addAgeHandler}></input>
          <Button type="submit">Add New User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
