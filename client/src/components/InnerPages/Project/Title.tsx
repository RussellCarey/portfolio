import { FunctionComponent } from "react";
import styled from "styled-components";

import { IStyledProps } from "../../../interfaces/types";
import { theme } from "../../../theme/Theme";

import { ReactComponent as Globe } from "../../../svg/globe.svg";
import { GitSVG } from "../../Icons/styles/styled";

import { ITitleProps } from "./types/types";
import { MainTitleContainer, TitleText, LogoContainer } from "./styles/styled";

const GithubLogo = styled(GitSVG)`
  width: 30px;

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;

const GlobeLogo = styled(Globe)`
  width: 25px;
  transform: scale(102%);
  fill: ${(props: IStyledProps) => props.themeState.borderColor};
  margin-left: ${theme.spacing.space.small};

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;

//! Animated the logo to show it can be clicked..
const Title: FunctionComponent<ITitleProps> = ({ text, github, website, themeState }) => {
  const onClickOpenLink = (link: string) => {
    console.log(link);
    return window.open(link, "_blank");
  };

  return (
    <MainTitleContainer>
      <TitleText themeState={themeState}>{text}</TitleText>
      <LogoContainer>
        <GithubLogo themeState={themeState} onClick={() => onClickOpenLink(github!)} />
        <GlobeLogo themeState={themeState} onClick={() => onClickOpenLink(website!)} />
      </LogoContainer>
    </MainTitleContainer>
  );
};

export default Title;
