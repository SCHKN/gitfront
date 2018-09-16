import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/vendors/animate.css";
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
//    ecosystemSelected: 'redux',
//    showEcosystems: 'false',
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
//     ],
//    ecosystem: ["redux", "react-native", "styled-components"]
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
  showEcosystems: false,
  filter: "year",
  errors: [],
  frameworks: [
    {
      framework: "react",
      // github specific
      organization: "facebook",
      officialRepoName: "react",
      ecosystem: ["redux", "react-native", "preact", "rxjs"]
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
