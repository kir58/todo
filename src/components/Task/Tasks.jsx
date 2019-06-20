/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import * as actions from "../../actions";
import styles from "./Task.css";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggle: actions.toggle
};

class Tasks extends React.Component {
  handleRemoveTask = id => () => {
    const { removeTask } = this.props;
    removeTask({ id });
    localStorage.removeItem(id);
  };

  handleToggle = id => () => {
    const { toggle, tasks } = this.props;
    const item = tasks.find(el => el.id === id);
    const newItem = { ...item, finished: !item.finished };
    localStorage.setItem(id, JSON.stringify(newItem));
    toggle({ id });
  };

  render() {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return null;
    }
    const getClassText = finished => {
      return cn({
        [styles.text]: true,
        [styles.textFinished]: finished
      });
    };
    const getClassClose = finished => {
      return cn({
        [styles.close]: true,
        [styles.closeFinished]: finished
      });
    };
    return (
      <ul className={styles.list}>
        {tasks
          .sort((a, b) => a.id - b.id)
          .map(t => (
            <li key={t.id} className={styles.item}>
              <input
                type="checkbox"
                id={t.id}
                checked={t.finished}
                className={styles.checkbox}
                onChange={this.handleToggle(t.id)}
              />
              <label htmlFor={t.id} />
              <span className={getClassText(t.finished)}>{t.text}</span>
              <button
                onClick={this.handleRemoveTask(t.id)}
                className={getClassClose(t.finished)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    );
  }
  // END
}

Tasks.propTypes = {
  toggle: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  actionCreators
)(Tasks);
