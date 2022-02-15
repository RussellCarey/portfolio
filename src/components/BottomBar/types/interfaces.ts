import { IThemeStateProps } from "../../../interfaces/styled";

export interface IStartButtonProps {
  themeState: IThemeStateProps;
  showStartMenu: boolean;
  setShowStartMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITimeProps {
  themeState: IThemeStateProps;
}

export interface IStartMenuProps {
  themeState: IThemeStateProps;
}
