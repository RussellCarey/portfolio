import React, { FunctionComponent, useEffect } from "react";
import { Container } from "./styles/styled";
import { IContactPageProps } from "./types/types";

const ContactPage: FunctionComponent<IContactPageProps> = ({ themeState }) => {
  return <Container themeState={themeState}></Container>;
};

export default ContactPage;
