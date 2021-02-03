import * as actionTypes from "./actionTypes";

export const onTodoFetch = (data) => {
  return {
    type: actionTypes.FETCH_TODO_SUCCESS,
    data: data,
  };
};

export const onCompletedFetch = (data) => {
  return {
    type: actionTypes.FETCH_COMPLETED_SUCCESS,
    data: data,
  };
};

export const onDeleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  };
};

export const onDeleteCompleted = (id) => {
  return {
    type: actionTypes.DELETE_COMPLETED,
    id,
  };
};

export const onAddTodo = (data) => {
  return {
    type: actionTypes.ADD_TODO,
    data,
  };
};

export const onUpdateTodo = (data) => {
  return {
    type: actionTypes.UPDATE_TODO,
    data,
  };
};

export const onUpdateCompleted = (data) => {
  return {
    type: actionTypes.UPDATE_COMPLETED,
    data,
  };
};
