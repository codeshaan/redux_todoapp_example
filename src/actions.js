// action types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPELTE_TODO";

export const FILTER_TODOS = 'FILTER_TODOS';

export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  COMPLETED: "COMPLETED",
  INCOMPLETE: "INCOMPLETE",
};

// action creators
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function filterTodos(filter) {
  return { type: FILTER_TODOS, filter };
}
