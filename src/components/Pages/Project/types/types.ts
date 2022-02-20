import { IThemeStateProps } from "../../../../interfaces/types";
import { IStyledProps } from "../../../../interfaces/types";

export interface IDescriptionProps {
  data: any;
}

export interface IImageSideProps {
  data: any;
  themeState: IThemeStateProps;
  dimensions: { width: number; height: number };
}

export interface IMediaAreaProps {
  data: any;
  themeState: IThemeStateProps;
  dimensions: { width: number; height: number };
}

export interface ISubTitleProps {
  leftText: string;
  rightText: string;
}

export interface ITextSideProps {
  data: any;
  dimensions: { width: number; height: number };
  themeState: IThemeStateProps;
}

export interface ITitleProps {
  text: string;
}

export interface IYoutubeEmbed {
  id: string;
  themeState: IThemeStateProps;
}

export interface IYoutubeStyleProps extends IStyledProps {
  hovered: any;
}