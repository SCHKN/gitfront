import React from "react";
import { Message } from "semantic-ui-react";
const FeaturesMessage = () => {
  return (
    <Message
      icon="star outline"
      header="Have you heard about the new features?"
      list={[
        'Show Ecosystems - get the best repos for your favorite framework library!',
        'Suggest your favorite library on our Github, if it gets selected you will be marked as a backer on our repo!',
        'Gitfront got prettier! We added some cool styling just to please your eyes.'
      ]}
    />
  );
};

export default FeaturesMessage;
