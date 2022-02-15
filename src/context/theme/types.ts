export const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR";
export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";

export interface IPropsState {
  children: React.ReactNode;
}

export interface IThemeState {
  backgroundColor: string;
  terminalColor: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
}

export interface ICommandObject {
  args: Array<string>;
  commandFunc: Function;
  commandName: string;
  fullSentence: string;
  passwordRef: string;
}
