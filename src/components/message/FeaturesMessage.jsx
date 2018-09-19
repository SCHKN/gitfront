import React from "react";
import { Message } from "semantic-ui-react";
const FeaturesMessage = () => {
  return (
    <Message
      icon="reddit orange"
      header="Have you heard about the new features?"
      list={[
        'Reddit is now available as a datasource! Try it in the filter menu and fetch the best posts for your favorite framework.'
      ]}
    />
  );
};

export default FeaturesMessage;
