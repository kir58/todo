import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Tasks from "../Task/Tasks";
import styles from "./App.css";

const App = () => (
  <div className={styles.container}>
    <NewTaskForm />
    <Tasks />
  </div>
);
export default App;
