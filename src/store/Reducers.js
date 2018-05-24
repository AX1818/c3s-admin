import { combineReducers } from "redux";

const navStore = {
  currentPage: "home"
};

function navigationReducer(state = navStore, action) {
  switch (action.type) {
    case "HOME":
      return { ...state, currentPage: "home" };

    case "BROWSING":
      return { ...state, currentPage: "BROWSING" };

    default:
      return state;
  }
}

function bottomNavigationReducer(state = { currentAction: "RECENTS" }, action) {
  console.log(`action: ${JSON.stringify(action, null, 2)}`);
  switch (action.type) {
    case "RECENTS":
      return { ...state, currentAction: "RECENTS" };

    case "UPLOAD":
      return { ...state, currentAction: "UPLOAD" };

    case "SEARCH":
      return { ...state, currentAction: "SEARCH" };

    default:
      return state;
  }
}

export default combineReducers({
  currentPage: navigationReducer,
  rootBottomNavigation: bottomNavigationReducer
});
