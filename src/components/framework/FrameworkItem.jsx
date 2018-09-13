import React from "react";
import { Segment } from "semantic-ui-react";
import FrameworkStatistics from "./FrameworkStatistics";
import FrameworkInfo from "./FrameworkInfo";

const FrameworkItem = ({ data, rank }) => {
  return (
    <Segment.Group>
      <FrameworkInfo data={data} rank={rank} />
      <FrameworkStatistics data={data} />
    </Segment.Group>
  );
};

export default FrameworkItem;
