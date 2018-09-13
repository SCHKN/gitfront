export const REQUEST_REPOS = "REQUEST_REPOS";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR";
export const REQUEST_FRAMEWORKS = "REQUEST_FRAMEWORKS";
export const FETCH_FRAMEWORKS_SUCCESS = "FETCH_FRAMEWORKS_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
export const SET_FILTER = "SET_FILTER";

export const requestRepos = framework => {
  return {
    type: REQUEST_REPOS,
    framework
  };
};

export const fetchReposSuccess = (json, framework) => {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: json,
    framework
  };
};

export const requestFrameworks = framework => {
  return {
    type: REQUEST_FRAMEWORKS,
    framework
  };
};

export const fetchFrameworksSuccess = (json, framework) => {
  return {
    type: FETCH_FRAMEWORKS_SUCCESS,
    payload: json,
    framework
  };
};

export const addError = message => {
  return {
    type: ADD_ERROR,
    message
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
