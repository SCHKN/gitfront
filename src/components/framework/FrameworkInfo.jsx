import React from "react";
import { Segment, Icon, Label } from "semantic-ui-react";
import { fetchPosts } from "../../redux/repoReducers";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  fetchPosts: framework => dispatch(fetchPosts(framework))
});

const FrameworkInfo = ({ fetchPosts, data, rank }) => {
  const { framework } = data;
  return (
    <Segment
      onClick={() => fetchPosts(framework)}
      textAlign="center"
      className="framework-info"
    >
      <Label attached="top" className={framework + "-top-label"}>
        {framework}
      </Label>
      <Icon name={framework} size="massive" className="framework-icon" />
      <Label attached="bottom">
        <Icon name="trophy" className={"trophy-" + rank} /> Rank # {rank}
      </Label>
    </Segment>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(FrameworkInfo);
