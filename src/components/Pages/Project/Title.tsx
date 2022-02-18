import { FunctionComponent } from "react";
import { ReactComponent as Git } from "../../../svg/github.svg";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";

const TitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${theme.spacing.space.medium};
`;

const TitleText = styled.h5`
  font-size: ${theme.font.fontsizes.h5};
  color: ${theme.colors.text.primary};
`;

const GithubLogo = styled(Git)`
  width: 30px;
  color: black;
`;

interface ITitleProps {
  text: string;
}

//! Animated the logo to show it can be clicked..
const Title: FunctionComponent<ITitleProps> = ({ text }) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
      <GithubLogo />
    </TitleContainer>
  );
};

export default Title;
