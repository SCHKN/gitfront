import React from "react";
import { Message } from "semantic-ui-react";
const FeaturesMessage = () => {
  return (
    <Message
      icon="cubes"
      header="Have you heard about the new features?"
      list={[
        'Nuxt and PrimeNG frameworks have been added to Gitfront - check them out!'
      ]}
    />
  );
};

export default FeaturesMessage;
