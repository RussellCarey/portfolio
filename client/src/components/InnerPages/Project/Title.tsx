import { FunctionComponent } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";

import { ReactComponent as Git } from "../../../svg/github.svg";
import { ReactComponent as Globe } from "../../../svg/globe.svg";

import { ITitleProps } from "./types/types";
import { MainTitleContainer, TitleText, LogoContainer } from "./styles/styled";

const GithubLogo = styled(Git)`
  width: 30px;
  color: black;

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;

const GlobeLogo = styled(Globe)`
  width: 25px;
  transform: scale(102%);
  color: black;
  margin-left: ${theme.spacing.space.small};

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;

//! Animated the logo to show it can be clicked..
const Title: FunctionComponent<ITitleProps> = ({ text, github, website }) => {
  const onClickOpenLink = (link: string) => {
    console.log(link);
    return window.open(link, "_blank");
  };

  return (
    <MainTitleContainer>
      <TitleText>{text}</TitleText>
      <LogoContainer>
        <GithubLogo onClick={() => onClickOpenLink(github!)} />
        <GlobeLogo onClick={() => onClickOpenLink(website!)} />
      </LogoContainer>
    </MainTitleContainer>
  );
};

export default Title;
