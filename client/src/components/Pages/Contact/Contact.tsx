import React, { FunctionComponent, useEffect } from "react";
import { Container, Form, TextArea, Button } from "./styles/styled";
import { IContactPageProps } from "./types/types";

const ContactPage: FunctionComponent<IContactPageProps> = ({ themeState }) => {
  return (
    <Container themeState={themeState}>
      <Form themeState={themeState} placeholder="full name" />
      <Form themeState={themeState} placeholder="email address" />
      <TextArea themeState={themeState} placeholder="your message" />
      <Button themeState={themeState}>send email</Button>
    </Container>
  );
};

export default ContactPage;