import { FunctionComponent } from "react";
import { PaleText, DescriptionText, DescriptionContainer } from "../Project/styles/styled";
import { IDescriptionProps } from "../Project/types/types";

//! This double text thing is weird. WOrking but not good check it out later.
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
