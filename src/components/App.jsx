import React from "react";
import NewTaskForm from "./NewTaskForm";
import Tasks from "./Tasks";
import styles from "../styles/App.css";

const App = () => (
  <div className={styles.container}>
    <NewTaskForm />
    <Tasks />
  </div>
);
export default App;
