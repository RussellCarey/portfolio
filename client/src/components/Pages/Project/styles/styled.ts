import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";
import { IYoutubeStyleProps } from "../types/types";
import { IStyledWithDimensionsProps } from "../../../../interfaces/types";
import ThemeState from "../../../../context/theme/themeState";

// Texts
export const PaleText = styled.p`
  flex: 1;
  color: #84847e;
  text-align: left;

  margin-bottom: ${theme.spacing.space.xsmall};
`;

export const Text = styled.p`
  flex: 2;
  color: ${theme.colors.text.primary};
`;

export const DescriptionText = styled.p`
  flex: 2;
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

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    height: 300px;
  }
`;

// Top image section
export const MediaAreaContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? theme.spacing.space.medium : theme.spacing.space.large};
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? "100%" : "80%")};

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

  padding: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? theme.spacing.space.small : theme.spacing.space.medium};

  // Controls all text besides the title.
  /* font-size: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 900 ? theme.font.fontsizes.xSmall : theme.font.fontsizes.text}; */

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;

  border-top: solid 5px
    ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? props.themeState.borderColor : "none")};

  border-left: solid 5px
    ${(props: IStyledWithDimensionsProps) => (props.dimensions.width > 800 ? props.themeState.borderColor : "none")};
`;

//
export const TitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: solid 1px black;
`;

// Text descritpion section
export const DescriptionContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.space.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
