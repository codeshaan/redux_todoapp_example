import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import "rsuite/dist/styles/rsuite-default.css";
// import App components here
import Header from "./components/Header";
import TodosForm from "./components/TodosForm";
import Todos from "./components/Todos";

import "./App.css";


export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <TodosForm />
        <Todos />
      </div>
    </Provider>
  );
}
