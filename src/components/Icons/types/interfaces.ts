import { IThemeStateProps } from "../../../interfaces/styled";

export interface IIconProps {
  pageName: string;
  themeState: IThemeStateProps;
  label: string;
  isWeb: string | null;
  aniDelay: number;
  selectedIcon: string | null;
  setSelectedIcon: any;
}

export interface IIconSquareProps {
  label: string;
  themeState: IThemeStateProps;
}

export interface IIconMenuContainerProps {
  top: number | null;
  left: number | null;
  themeState: IThemeStateProps;
  display: string;
}

export interface IIconTextProps {
  themeState: IThemeStateProps;
  isSelected: boolean;
}
