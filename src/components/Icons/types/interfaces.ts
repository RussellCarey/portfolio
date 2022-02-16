import { EWindowTypes, IThemeStateProps } from "../../../interfaces/types";

export interface IIconProps {
  pageName: string;
  windowType: EWindowTypes;
  themeState: IThemeStateProps;
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
  themeState: IThemeStateProps;
  display: string;
}

export interface IIconTextProps {
  themeState: IThemeStateProps;
  isSelected: boolean;
}

export interface IIconMenuProps {
  top: number | null;
  left: number | null;
  display: any;
  themeState: any;
  onClickHandler: any;
}
