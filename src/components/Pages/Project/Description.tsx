import styled from "styled-components";
import { theme } from "../../../theme/Theme";

import Title from "./Title";
import SubTitle from "./Subtitle";
import { FunctionComponent } from "react";

const DescriptionContainer = styled.div`
  width: 100%;

  padding: ${theme.spacing.space.small};

  display: flex;
`;

const PaleText = styled.p`
  flex: 1;
  font-size: ${theme.font.fontsizes.text};
  color: #84847e;
`;

const Text = styled.p`
  flex: 2;
  font-size: ${theme.font.fontsizes.text};
  color: ${theme.colors.text.primary};
`;

interface IDescriptionProps {
  data: any;
}

const Description: FunctionComponent<IDescriptionProps> = ({ data }) => {
  return (
    <DescriptionContainer>
      <PaleText>description</PaleText>
      <Text>{data.data.description[0].text}</Text>
    </DescriptionContainer>
  );
};

export default Description;
