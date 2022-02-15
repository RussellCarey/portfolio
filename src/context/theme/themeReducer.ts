import { SET_BACKGROUND_COLOR, SET_DARK_THEME, SET_LIGHT_THEME, IThemeState } from "./types";

const Reducer = (state: IThemeState, action: any) => {
  switch (action.type) {
    // Set the new survey title of building survey
    case SET_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.payload };

    case SET_DARK_THEME:
      return action.payload;

    case SET_LIGHT_THEME:
      return action.payload;

    default:
      return state;
  }
};

export default Reducer;
