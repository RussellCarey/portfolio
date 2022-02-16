import { SET_ACTIVE_WINDOW, CREATE_NEW_WINDOW, DESTROY_ACTIVE_WINDOW, MINIMIZE_ACTIVE_WINDOW } from "./types";

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case CREATE_NEW_WINDOW:
      return {
        ...state,
        windows: [...state.windows, action.payload],
      };

    case SET_ACTIVE_WINDOW:
      return {
        ...state,
        currentWindowID: action.payload,
      };

    case DESTROY_ACTIVE_WINDOW:
      return {
        ...state,
        windows: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
