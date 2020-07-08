import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, filterTodos, visibilityFilters } from "../actions.js";
import {
  Alert,
  Dropdown,
  Icon,
  Button,
  InputGroup,
  Input,
  Grid,
  Row,
  Col,
} from "rsuite";

function TodosForm(props) {
  const [todo, setTodo] = useState("");
  const [filterTitle, setFilterTitle] = useState("Show All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "" || todo.length === 0 || !todo) {
      Alert.error("Please enter something in the input box", 3000);
      return;
    }

    props.addTodo(todo);
    setTodo("");
  };

  const handleFilter = (filter) => {
    setFilterTitle(filter);
    props.filterTodos(visibilityFilters[filter]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col md="16" sm="14" xs="24">
            <InputGroup inside>
              <Input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e)}
                placeholder="Todo"
              />
              <InputGroup.Button>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-clipboard-check"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </InputGroup.Button>
            </InputGroup>
          </Col>
          <Col md="4" sm="4" xs="24">
            <Button appearance="primary" block>
              <Icon icon="plus" size="xs" /> Add
            </Button>
          </Col>
          <Col md="4" sm="6" xs="24">
            <Dropdown
              title={filterTitle}
              icon={<Icon icon="filter" />}
              appearance="subtle"
            >
              <Dropdown.Item
                icon={<Icon icon="globe" />}
                onSelect={() => handleFilter("All")}
              >
                Show All
              </Dropdown.Item>
              <Dropdown.Item
                icon={<Icon icon="check" />}
                onSelect={() => handleFilter("Completed")}
              >
                Show Completed
              </Dropdown.Item>
              <Dropdown.Item
                icon={<Icon icon="close" />}
                onSelect={() => handleFilter("Incomplete")}
              >
                Show Incomplete
              </Dropdown.Item>
            </Dropdown>
          </Col>
        </Row>
      </Grid>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filterTodos: (filter) => dispatch(filterTodos(filter)),
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodosForm);
