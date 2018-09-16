import {
  requestRepos,
  fetchReposSuccess,
  addError,
  REQUEST_REPOS,
  FETCH_REPOS_SUCCESS,
  ADD_ERROR,
  REQUEST_FRAMEWORKS,
  FETCH_FRAMEWORKS_SUCCESS,
  SET_FILTER,
  requestFrameworks,
  fetchFrameworksSuccess,
  setFilter,
  SHOW_ECOSYSTEMS,
  HIDE_ECOSYSTEMS
} from "./repoActions";
import axios from "axios";
import { initialState, store } from "./../index";
import {
  getLowerBound,
  getUpperBound
} from "./../components/filtering/filterUtils";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        frameworkSelected: action.framework,
        ecosystemSelected: action.ecosystem,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.repos = [];
            e.isRepoFetching = true;
          }
          return e;
        })
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.repos = action.payload.items;
            e.isRepoFetching = false;
          }
          return e;
        })
      };
    case REQUEST_FRAMEWORKS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.stars = 0;
            e.subscribers = 0;
            e.isFrameworkFetching = true;
          }
          return e;
        })
      };
    case FETCH_FRAMEWORKS_SUCCESS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.stars = action.payload.stargazers_count;
            e.subscribers = action.payload.subscribers_count;
            e.isFrameworkFetching = false;
          }
          return e;
        })
      };
    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.message]
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case SHOW_ECOSYSTEMS:
      return {
        ...state,
        showEcosystems: true
      };
    case HIDE_ECOSYSTEMS:
      return {
        ...state,
        showEcosystems: false
      };
    default:
      return state;
  }
};

// Overloading reducers
export const fetchPosts = (framework, ecosystem) => {
  return dispatch => {
    dispatch(requestRepos(framework, ecosystem));
    const filter = store.getState().filter;
    axios
      .get(
        `https://api.github.com/search/repositories?q=topic:${
          ecosystem ? ecosystem : framework
        }+created:${getLowerBound(filter)}..${getUpperBound(
          filter
        )}&sort=stars&order=desc`
      )
      .then(response => dispatch(fetchReposSuccess(response.data, framework)))
      .catch(err => dispatch(addError(err.response.data.message)));
  };
};

export const setFilterAndFetchPosts = filter => {
  return dispatch => {
    dispatch(setFilter(filter));
    dispatch(fetchPosts(store.getState().frameworkSelected, store.getState().ecosystemSelected));
  };
};

export const fetchFrameworks = (framework, organization, officialRepoName) => {
  return dispatch => {
    dispatch(requestFrameworks(framework));
    axios
      .get(`https://api.github.com/repos/${organization}/${officialRepoName}`)
      .then(response =>
        dispatch(fetchFrameworksSuccess(response.data, framework))
      )
      .catch(err => dispatch(addError(err.response.data.message)));
  };
};
