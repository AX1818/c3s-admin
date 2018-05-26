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

function bottomNavigationReducer(
  state = {
    currentAction: "recentsPhotos"
  },
  action
) {
  console.log(`action: ${JSON.stringify(action, null, 2)}`);
  switch (action.type) {
    case "recentsPhotos":
      return { ...state, currentAction: "recentsPhotos" };

    case "uploadPhotos":
      return { ...state, currentAction: "uploadPhotos" };

    case "searchPhotos":
      return { ...state, currentAction: "searchPhotos" };

    default:
      return state;
  }
}

export default combineReducers({
  currentPage: navigationReducer,
  rootBottomNavigation: bottomNavigationReducer
});
