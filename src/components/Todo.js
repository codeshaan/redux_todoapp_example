import React from "react";
import { Button, Grid, Row, Col, Icon } from "rsuite";

function Todo(props) {
  return (
    <Grid style={{ marginTop: "2rem" }}>
      <Row>
        <Col md="20" sm="20" xs="18">
          <p
            style={{
              textDecoration:
                props.todo.completed === true ? "line-through" : "none",
            }}
          >
            {props.todo.title}
          </p>
        </Col>
        <Col md="2" sm="2" xs="1">
          <Button
            appearance="subtle"
            onClick={() => props.completeTodo(props.todo.id)}
          >
            <Icon icon="check" />
          </Button>
        </Col>
        <Col md="2" sm="2" xs="1">
          <Button
            appearance="subtle"
            onClick={() => props.removeTodo(props.todo.id)}
          >
            <Icon icon="close" />
          </Button>
        </Col>
      </Row>
    </Grid>
  );
}

export default Todo;
