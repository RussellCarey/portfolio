import { FunctionComponent } from "react";
import { IAboutPageProps } from "./types/interfaces";
import styled from "styled-components";

const Container = styled.div``;

const AboutPage: FunctionComponent<IAboutPageProps> = ({ themeState, children }) => {
  return <Container> THIS IS AN ABOUT PAGE</Container>;
};

export default AboutPage;
