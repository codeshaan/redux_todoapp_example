import React, { useState } from "react";
import { Dropdown, Icon } from "rsuite";
import { visibilityFilters, filterTodos } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function DropdownFilter({ dispatch }) {
  const [filterTitle, setFilterTitle] = useState("Show All");
  const bindFilterTodos = bindActionCreators(filterTodos, dispatch);

  const handleFilter = (filter) => {
    let filterTitle = "";

    if (filter === visibilityFilters.SHOW_ALL) {
      filterTitle = "All";
    } else if (filter === visibilityFilters.COMPLETED) {
      filterTitle = "Completed";
    } else {
      filterTitle = "Incomplete";
    }

    setFilterTitle(filterTitle);
    bindFilterTodos(visibilityFilters[filter]);
  };

  return (
    <Dropdown
      title={filterTitle}
      icon={<Icon icon="filter" />}
      appearance="subtle"
    >
      <Dropdown.Item
        icon={<Icon icon="globe" />}
        onSelect={() => handleFilter(visibilityFilters.SHOW_ALL)}
      >
        Show All
      </Dropdown.Item>
      <Dropdown.Item
        icon={<Icon icon="check" />}
        onSelect={() => handleFilter(visibilityFilters.COMPLETED)}
      >
        Show Completed
      </Dropdown.Item>
      <Dropdown.Item
        icon={<Icon icon="close" />}
        onSelect={() => handleFilter(visibilityFilters.INCOMPLETE)}
      >
        Show Incomplete
      </Dropdown.Item>
    </Dropdown>
  );
}

export default connect()(DropdownFilter);
