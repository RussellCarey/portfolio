import { SET_ACTIVE_WINDOW, CREATE_NEW_WINDOW, DESTROY_ACTIVE_WINDOW, MINIMIZE_ACTIVE_WINDOW } from "./types";

import React, { useReducer, useContext } from "react";
import WindowReducer from "./windowReducer";
import WindowContext from "./windowContext";
import Window from "../../components/Window/Index";

interface IWindowObject {
  id: number;
  label: string;
  pageName: string;
  windowType: string;
  isProject: boolean;
  windowList: any;
}

const WindowState = (props: any) => {
  const initialState = {
    currentWindowID: null,
    windows: [],
  };

  const [windowState, dispatch] = useReducer(WindowReducer, initialState);

  // Create and populate a new window.
  const createNewWindow = (
    pageName: string,
    label: string,
    id: number,
    windowType: string,
    data: any,
    isProject: boolean
  ) => {
    const newWindow = (
      <Window
        themeState={""}
        pageName={pageName}
        data={data}
        id={id}
        windowType={windowType}
        isProject={isProject}
        windowList={null}
      ></Window>
    );
    dispatch({ type: CREATE_NEW_WINDOW, payload: newWindow });
  };

  // Set Active Window
  const setActiveWindow = (id: number) => {
    dispatch({ type: SET_ACTIVE_WINDOW, payload: id });
  };

  // Delete window from the view
  const deleteActiveWindow = (id: number) => {
    const filteredList = windowState.windows.filter((window: IWindowObject) => window.id !== id);
    dispatch({ type: DESTROY_ACTIVE_WINDOW, payload: filteredList });
  };

  return (
    <WindowContext.Provider
      value={{
        windowState: windowState,
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
