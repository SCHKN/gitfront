import React, { Component } from "react";
import RepoItem from "./RepoItem";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

const mapStateToProps = state => ({
  data: state
});

class RepoList extends Component {
  render() {
    const { data } = this.props;
    const matchingFramework = data.frameworks.find(f => {
      return f.framework === data.frameworkSelected;
    });
    return (
      <Segment
        loading={matchingFramework.isRepoFetching}
        className="results-segment"
      >
        {matchingFramework.repos &&
          matchingFramework.repos.map(repo => (
            <RepoItem
              repo={repo}
              key={repo.id}
              framework={data.frameworkSelected}
            />
          ))}
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(RepoList);
