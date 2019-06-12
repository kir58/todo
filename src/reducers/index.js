import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions";

const tasks = handleActions(
  {
    [actions.getTasks](
      state,
      {
        payload: { tasks }
      }
    ) {
      return tasks;
    },
    [actions.addTask](
      state,
      {
        payload: { task }
      }
    ) {
      return [...state, task];
    },
    [actions.removeTask](
      state,
      {
        payload: { id }
      }
    ) {
      return state.filter(t => t.id !== id);
    },
    [actions.toggle](
      state,
      {
        payload: { id }
      }
    ) {
      return state.map(t =>
        t.id === id ? { ...t, finished: !t.finished } : t
      );
    }
  },
  []
);
const currentId = handleActions(
  {
    [actions.getTasks](
      state,
      {
        payload: { currentId }
      }
    ) {
      return currentId;
    }
  },
  0
);
export default combineReducers({
  tasks,
  currentId
});
