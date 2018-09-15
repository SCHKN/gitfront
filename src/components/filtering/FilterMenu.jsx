import React from "react";
import { Menu, Header, Icon, Dropdown } from "semantic-ui-react";
import { connect } from 'react-redux'
import { setFilterAndFetchPosts } from "../../redux/repoReducers";

const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "week",
    text: "this week",
    value: "week",
    content: "This Week"
  },
  {
    key: "month",
    text: "this month",
    value: "month",
    content: "This Month"
  },
  {
    key: "year",
    text: "this year",
    value: "year",
    content: "This Year"
  }
];

const mapDispatchToProps = (dispatch) => ({
    changeFilter: (filter) => dispatch(setFilterAndFetchPosts(filter))
})

const FilterMenu = ({ changeFilter }) => {
  return (
    <Menu size="large" className="animated fadeIn">
      <Menu.Item header>Filters</Menu.Item>
      <Menu.Item>
        <Header as="h4">
          <Icon name="line graph" />
          <Header.Content>
            Trending repos{" "}
            <Dropdown
              inline
              header="Adjust time span"
              options={options}
              defaultValue={options[3].value}
              onChange={(e, { value }) => changeFilter(value)}
            />
          </Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  );
};

export default connect(null, mapDispatchToProps)(FilterMenu);
