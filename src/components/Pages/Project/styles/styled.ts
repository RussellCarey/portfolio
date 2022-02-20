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


  border-right: solid 5px ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? "none" : props.themeState.borderColor}

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

  font-size: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 900 ? theme.font.fontsizes.xSmall : theme.font.fontsizes.text};

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
  text-align: right;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 1px black;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

// Text descritpion section
export const DescriptionContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.space.small};
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
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
