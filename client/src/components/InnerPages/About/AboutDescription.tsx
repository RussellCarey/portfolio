import { FunctionComponent } from "react";
import { PaleText, DescriptionText } from "../styles/styled";
import { DescriptionContainer } from "../Project/styles/styled";
import { IDescriptionProps } from "../Project/types/types";

const AboutDescription: FunctionComponent<IDescriptionProps> = ({ data }) => {
  return (
    <DescriptionContainer>
      <PaleText>a little more</PaleText>
      <DescriptionText>
        {data.data.description.map((p: any) => {
          return <DescriptionText>{p.text}</DescriptionText>;
        })}
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default AboutDescription;
