import React, { useState } from "react";
import DropdownFilter from "./DropdownFilter";
import InputTodo from "./InputTodo";
import { bindActionCreators } from "redux";
import { Alert, Icon, Button, Grid, Row, Col } from "rsuite";
import { connect } from "react-redux";
import { addTodo } from "../actions";

function TodosForm({ dispatch }) {
  const addTodoToState = bindActionCreators(addTodo, dispatch);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "" || todo.length === 0 || !todo) {
      Alert.error("Please enter something in the input box", 3000);
      return;
    }

    addTodoToState(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col md="16" sm="14" xs="24">
            <InputTodo todo={todo} setTodo={setTodo} />
          </Col>
          <Col md="4" sm="4" xs="24">
            <Button appearance="primary" type="submit">
              <Icon icon="plus" /> Add
            </Button>
          </Col>
          <Col md="4" sm="6" xs="24">
            <DropdownFilter />
          </Col>
        </Row>
      </Grid>
    </form>
  );
}

export default connect()(TodosForm);
