import { FunctionComponent } from "react";
import { PaleText, Text, DescriptionText } from "../styles/styled";
import { DescriptionContainer } from "./styles/styled";
import { IDescriptionProps } from "./types/types";

//! This double text thing is weird. WOrking but not good check it out later.
const Description: FunctionComponent<IDescriptionProps> = ({ data }) => {
  return (
    <DescriptionContainer>
      <PaleText>description</PaleText>
      <DescriptionText>
        {data.data.description.map((p: any) => {
          return <DescriptionText>{p.text}</DescriptionText>;
        })}
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default Description;
