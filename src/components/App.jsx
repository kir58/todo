/* eslint-disable import/extensions */
import React from "react";
import NewTaskForm from "./NewTaskForm.jsx";
import Tasks from "./Tasks.jsx";
import styles from "../styles/App.css";

const App = () => (
  <div className={styles.container}>
    <NewTaskForm />
    <Tasks />
  </div>
);
export default App;
