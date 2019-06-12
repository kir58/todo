import { createAction } from "redux-actions";

export const addTask = createAction("TASK_ADD");
export const removeTask = createAction("TASK_REMOVE");
export const toggle = createAction("TOGGLE");
export const getTasks = createAction("GET_TASKS");

export const getInitState = () => dispatch => {
  const keys = Object.keys(localStorage).filter(
    key => key !== "loglevel:webpack-dev-server"
  );
  const id = Math.max(
    ...keys.map(key => Number(JSON.parse(localStorage[key]).id)),
    0
  );
  const initState = keys.map(key => JSON.parse(localStorage[key]));
  dispatch(getTasks({ tasks: initState, currentId: id }));
};
