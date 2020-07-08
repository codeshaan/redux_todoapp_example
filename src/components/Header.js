import React from "react";
import { connect } from "react-redux";

function Header(props) {
  return (
    <header>
      <h1>Todo App</h1>
    </header>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Header);
