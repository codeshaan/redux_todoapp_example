import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { removeTodo, completeTodo, visibilityFilters } from "../actions.js";

import Todo from "./Todo";
import { Message } from "rsuite";

const EmptyTodoAlert = () => {
  return (
    <>
      <Message
        style={{ marginTop: "3rem" }}
        showIcon
        type="error"
        title="No todos to show!"
        description="Start typing in the input box above to add some todos!!"
      />
      ;
    </>
  );
};

function Todos(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let filteredTodos = [];

    switch (props.filterTodos) {
      case visibilityFilters.SHOW_ALL:
        filteredTodos = props.todos;
        break;

      case visibilityFilters.COMPLETED:
        filteredTodos = props.todos.filter((todo) => todo.completed === true);
        break;

      case visibilityFilters.INCOMPLETE:
        filteredTodos = props.todos.filter((todo) => todo.completed === false);
        break;

      default:
        filteredTodos = [];
    }

    setTodos(filteredTodos);
  }, [props.filterTodos, props.todos]);

  if (props.todos.length === 0 || !props.todos) {
    return <EmptyTodoAlert />;
  }

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          completeTodo={props.completeTodo}
          removeTodo={props.removeTodo}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filterTodos: state.filterTodos,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
