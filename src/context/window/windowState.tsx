import { SET_ACTIVE_WINDOW, CREATE_NEW_WINDOW, DESTROY_ACTIVE_WINDOW, MINIMIZE_ACTIVE_WINDOW } from "./types";
import { v4 as uuidv4 } from "uuid";

import React, { useReducer, useContext } from "react";
import WindowReducer from "./windowReducer";
import WindowContext from "./windowContext";

import { IWindowObject } from "./types";

const WindowState = (props: any) => {
  const initialState = {
    currentWindowID: null,
    windows: [],
  };

  const [windowState, dispatch] = useReducer(WindowReducer, initialState);

  // Create and populate a new window.
  const createNewWindow = (pageName: string, windowType: string, data: any, isProject: boolean) => {
    const newWindow = {
      themeState: "",
      pageName,
      data,
      id: uuidv4(),
      windowType,
      isProject,
    };

    dispatch({ type: CREATE_NEW_WINDOW, payload: newWindow });
  };

  // Set Active Window
  const setActiveWindow = (id: string) => {
    dispatch({ type: SET_ACTIVE_WINDOW, payload: id });
  };

  // Delete window from the view
  const deleteActiveWindow = (id: string) => {
    const filteredList = windowState.windows.filter((window: IWindowObject) => window.id !== id);
    dispatch({ type: DESTROY_ACTIVE_WINDOW, payload: filteredList });
  };

  return (
    <WindowContext.Provider
      value={{
        windowState,
        createNewWindow,
        setActiveWindow,
        deleteActiveWindow,
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowState;
