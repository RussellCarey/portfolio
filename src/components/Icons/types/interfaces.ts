import { IThemeStateProps } from "../../../interfaces/styled";

export interface IIconProps {
  pageName: string;
  themeState: any;
  label: string;
  img: string;
  windowType: string | null;
  isWeb: string | null;
  aniDelay: number;
  data: any | null;
}

export interface IIconSquareProps {
  img: any;
  themeState: any;
}

export interface IIconMenuContainerProps {
  top: number | null;
  left: number | null;
  themeState: IThemeStateProps;
  display: string;
}
