import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
const AddUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [errorContent, setErrorContent] = useState("");

 

  const submitHandler = (event) => {
    event.preventDefault();
    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setErrorContent("Please provide an answer for each field");
      return;
    }
    if (+age < 0 || +age > 120) {
      setErrorContent("Invalid age entered");
      return;
    }
    const id = Math.random().toString();
    props.onAddUser(name, age, id);
    enteredName.current.value ='';
    enteredAge.current.value= '';
  };

  const resetErrorHandler = () => {
    setErrorContent("");
  };

  return (
    <>
      {errorContent && (
        <Modal message={errorContent} onCancel={resetErrorHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" ref={enteredName}></input>
          <label>Age</label>
          <input type="number" ref={enteredAge}></input>
          <Button type="submit">Add New User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
