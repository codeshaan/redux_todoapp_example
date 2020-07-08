import { createStore } from "redux";
import rootReducer from "./reducers";

import { addTodo } from "./actions.js";

export const store = createStore(rootReducer, window.STATE_FROM_SERVER);

const unsubscribe = store.subscribe(() =>
  console.log("store", store.getState())
);

store.dispatch(addTodo("Learn redux"));
store.dispatch(addTodo("Learn redux"));
