import { FunctionComponent } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";

const TitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px black;
`;

const PaleText = styled.p`
  font-size: ${theme.font.fontsizes.text};
  color: #84847e;
`;

const Text = styled.p`
  font-size: ${theme.font.fontsizes.text};
  color: ${theme.colors.text.primary};
  text-align: right;
`;

interface ISubTitleProps {
  leftText: string;
  rightText: string;
}

const SubTitle: FunctionComponent<ISubTitleProps> = ({ leftText, rightText }) => {
  return (
    <TitleContainer>
      <PaleText>{leftText}</PaleText>
      <Text>{rightText}</Text>
    </TitleContainer>
  );
};

export default SubTitle;
