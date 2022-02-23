import { FunctionComponent } from "react";
import { ReactComponent as Git } from "../../../svg/github.svg";
import { ReactComponent as Globe } from "../../../svg/globe.svg";
import styled from "styled-components";

import { ITitleProps } from "./types/types";
import { MainTitleContainer } from "./styles/styled";
import { TitleText } from "./styles/styled";

const GithubLogo = styled(Git)`
  width: 30px;
  color: black;
`;

const GlobeLogo = styled(Globe)`
  width: 30px;
  color: black;
`;

//! Animated the logo to show it can be clicked..
const Title: FunctionComponent<ITitleProps> = ({ text }) => {
  return (
    <MainTitleContainer>
      <TitleText>{text}</TitleText>
      <GithubLogo />
    </MainTitleContainer>
  );
};

export default Title;
