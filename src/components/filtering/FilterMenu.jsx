import React from "react";
import {
  Menu,
  Header,
  Icon,
  Dropdown,
  Button,
  Responsive
} from "semantic-ui-react";
import { connect } from "react-redux";
import { setFilterAndFetchPosts } from "../../redux/repoReducers";
import { showEcosystems } from "../../redux/repoActions";
import { hideEcosystems } from "./../../redux/repoActions";

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

const mapStateToProps = state => ({
  ecosystemVisible: state.showEcosystems,
  frameworkSelected: state.frameworkSelected,
  ecosystemSelected: state.ecosystemSelected
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(setFilterAndFetchPosts(filter)),
  showEcosystems: () => dispatch(showEcosystems()),
  hideEcosystems: () => dispatch(hideEcosystems())
});

const FilterMenu = ({
  changeFilter,
  showEcosystems,
  hideEcosystems,
  ecosystemVisible,
  frameworkSelected,
  ecosystemSelected
}) => {
  return (
    <Menu size="large">
      <Responsive>
        <Menu.Item>
          <Icon name="world" />{" "}
          {"Currently watching " +
            frameworkSelected +
            (ecosystemSelected ? " with ecosystem " + ecosystemSelected : "")}
        </Menu.Item>
      </Responsive>
      <Menu.Menu position="right">
        <Responsive>
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
        </Responsive>
        <Responsive>
          <Menu.Item>
            <Button
              content={ecosystemVisible ? "Hide Ecosystems" : "Show Ecosystems"}
              onClick={() => {
                ecosystemVisible ? hideEcosystems() : showEcosystems();
              }}
              size="mini"
              className="ecosystem-button"
            />
          </Menu.Item>
        </Responsive>
      </Menu.Menu>
    </Menu>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenu);
