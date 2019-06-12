import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";
import styles from "../styles/App.css";

const actionCreators = {
  addTask: actions.addTask
};

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleAddTask = e => {
    e.preventDefault();
    const { value } = this.textInput.current;
    const { addTask } = this.props;
    const task = { text: value, id: _.uniqueId(), finished: false };
    addTask({ task });
    this.textInput.current.value = "";
  };

  addTaskByEnter = e => {
    const ENTER_CODE = 13;
    const { value } = this.textInput.current;
    if (e.keyCode === ENTER_CODE && value) {
      this.handleAddTask(e);
    }
  };

  render() {
    return (
      <div className={styles.header}>
        <h2 className={styles.title}>Todo List</h2>
        <form action="" className={styles.form} onSubmit={this.handleAddTask}>
          <input
            className={styles.inputTask}
            type="text"
            placeholder="add a new todo..."
            required
            ref={this.textInput}
            onKeyUp={this.addTaskByEnter}
          />
          <input type="submit" className={styles.addBtn} value="+" />
        </form>
      </div>
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default connect(
  null,
  actionCreators
)(NewTaskForm);
