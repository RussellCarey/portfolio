import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";
import { IYoutubeStyleProps } from "../types/types";
import { IStyledWithDimensionsProps } from "../../../../interfaces/types";
import ThemeState from "../../../../context/theme/themeState";

// Texts
export const PaleText = styled.p`
  flex: 1;
  font-size: ${theme.font.fontsizes.text};
  color: #84847e;
`;

export const Text = styled.p`
  flex: 2;
  font-size: ${theme.font.fontsizes.text};
  color: ${theme.colors.text.primary};
  text-align: right;
`;

export const DescriptionText = styled.p`
  flex: 2;
  font-size: ${theme.font.fontsizes.text};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.space.medium};
`;

//Main Container for the page
export const ProjectContainer = styled.div`
  display: flex;
  overflow: hidden;

  // Media
  flex-direction: ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? "column" : "row")};
`;

// Left side of page
export const ImageSideContainer = styled.div`
  width: 100%;
  height: 100%;


  border-right: solid 5px ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? "none" : props.themeState.borderColor}

  display: flex;
  flex-direction: column;
`;

// Caroousel
export const StripContainer = styled.div`
  width: 100%;
  max-height: 150px;
  flex: 1;

  display: flex;
  flex-wrap: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${theme.spacing.space.large};
`;

// Top image section
export const MediaAreaContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? theme.spacing.space.small : theme.spacing.space.large};
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;

  border: solid 5px ${(props: IYoutubeStyleProps) => props.themeState.borderColor};
  border-radius: 15px;

  filter: ${(props: IYoutubeStyleProps) => (!props.hovered ? "grayscale(100%)" : "grayscale(0%)")};
`;

export const IFrameContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const TextSideContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: ${theme.spacing.space.medium};

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;

  border-top: solid 5px
    ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? props.themeState.borderColor : "none")};
`;

//
export const TitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px black;
`;

// Text descritpion section
export const DescriptionContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.space.small};
  display: flex;
`;

export const MainTitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${theme.spacing.space.medium};
`;

export const TitleText = styled.h5`
  font-size: ${theme.font.fontsizes.h5};
  color: ${theme.colors.text.primary};
`;
