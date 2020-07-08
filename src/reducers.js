import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  visibilityFilters,
} from "./actions.js";

import { combineReducers } from "redux";
import { useState } from "react";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Math.random() * 10000000, title: action.todo, completed: false },
      ];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case COMPLETE_TODO:
      let todos = [];
      for (let i = 0; i < state.length; i++) {
        let todo = state[i];
        todos.push(todo);
        if (todos[i].id === action.id) {
          todos[i].completed = !todos[i].completed;
        }
      }
      return todos;

    default:
      return state;
  }
}

let prevState = visibilityFilters.SHOW_ALL;

function filterTodos(state = prevState, action) {
  switch (action.filter) {
    case visibilityFilters.SHOW_ALL:
      prevState = visibilityFilters.SHOW_ALL;
      return visibilityFilters.SHOW_ALL;

    case visibilityFilters.COMPLETED:
      prevState = visibilityFilters.COMPLETED;
      return visibilityFilters.COMPLETED;

    case visibilityFilters.INCOMPLETE:
      prevState = visibilityFilters.INCOMPLETE;
      return visibilityFilters.INCOMPLETE;

    default:
      return prevState;
  }
}

const rootReducer = combineReducers({
  todos,
  filterTodos,
});

export default rootReducer;
