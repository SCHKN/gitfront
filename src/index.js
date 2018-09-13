import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import { reducer, fetchPosts, fetchFrameworks } from "./redux/repoReducers";

// State should look like

// const state = {
//    frameworkSelected: 'react',
//    filter: 'day',
//    [
//    {
//     framework: 'react',
//     stars: 3,
//     subscribers: 0,
//     isFrameworkFetching: true,
//     isRepoFetching: true
//     repos: [
//       repo1,
//       repo2
//     ]
//   },
//   {
//     framework: 'angular',
//     stars: 4,
//     subscribers: 23,
//     isFrameworkFetching: true,
//     isRepoFetching: false
//     repos: [
//       repo1,
//       repo2
//     ]
//   }
// ]
// }

export const initialState = {
  frameworkSelected: "vuejs",
  filter: 'year',
  errors: [],
  frameworks: [
    {
      framework: "react",
      // github specific
      organization: "facebook",
      officialRepoName: "react"
    },
    {
      framework: "angular",
      organization: "angular",
      officialRepoName: "angular"
    },
    {
      framework: "vuejs",
      organization: "vuejs",
      officialRepoName: "vue"
    },
    {
      framework: "ember",
      organization: "emberjs",
      officialRepoName: "ember.js"
    }
  ]
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

initialState.frameworks.map(f =>
  store.dispatch(
    fetchFrameworks(f.framework, f.organization, f.officialRepoName)
  )
);

store.dispatch(fetchPosts(initialState.frameworks[2].framework));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
