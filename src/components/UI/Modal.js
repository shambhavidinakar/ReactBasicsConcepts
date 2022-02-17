import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCancel} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Error</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCancel}>Okay!</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return <>
  {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}/>, document.getElementById('backdrop-root'))}
  {ReactDOM.createPortal(<ModalOverlay onCancel={props.onCancel} message={props.message}/>, document.getElementById('overlay-root'))}
  </>;
};

export default Modal;
