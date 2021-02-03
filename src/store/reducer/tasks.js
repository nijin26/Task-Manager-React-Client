import * as actionType from "../actions/actionTypes";

const initialState = {
  todo: [],
  completed: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_TODO_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        todo: action.data,
      };
    case actionType.FETCH_COMPLETED_SUCCESS:
      return {
        ...state,
        completed: action.data,
      };
    case actionType.DELETE_TODO:
      let updatedTodo = state.todo.filter((t) => t._id !== action.id);
      return {
        ...state,
        todo: updatedTodo,
      };
    case actionType.DELETE_COMPLETED:
      const updatedCompleted = state.completed.filter(
        (t) => t._id !== action.id
      );
      return {
        ...state,
        completed: updatedCompleted,
      };
    case actionType.ADD_TODO:
      return {
        ...state,
        todo: state.todo.concat(action.data),
      };
    case actionType.UPDATE_TODO:
      const newTodo = state.todo.filter((t) => t._id !== action.data._id);
      return {
        ...state,
        todo: newTodo,
        completed: state.completed.concat(action.data),
      };
    case actionType.UPDATE_COMPLETED:
      const newCompleted = state.completed.filter(
        (t) => t._id !== action.data._id
      );
      return {
        ...state,
        completed: newCompleted,
        todo: state.todo.concat(action.data),
      };
    default:
      return state;
  }
};

export default taskReducer;
