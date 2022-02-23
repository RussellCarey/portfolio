import React, { FunctionComponent, useState } from "react";
import {
  Container,
  EmailSideBar,
  EmailInbox,
  EmailContainer,
  EmailInput,
  EmailTextBox,
  EmailButton,
} from "./styles/styled";
import { IContactPageProps } from "./types/types";

const ContactPage: FunctionComponent<IContactPageProps> = ({ themeState, dimensions }) => {
  const [userMessage, setUserMessage] = useState({
    to: "To: Russell",
    from: "",
    subject: "",
    message: "",
  });

  const onChangeText = (e: React.ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    const targetID = e.target.id;
    setUserMessage({ ...userMessage, [targetID]: element.value });
  };

  return (
    <Container themeState={themeState}>
      {dimensions.width > 500 ? (
        <>
          <EmailSideBar themeState={themeState}>
            Inbox <br></br> Junk <br></br> Sent <br></br> deleted
          </EmailSideBar>
          <EmailInbox themeState={themeState}>No new emails :(</EmailInbox>
        </>
      ) : null}
      <EmailContainer themeState={themeState}>
        <EmailInput id="to" value={userMessage.to} />
        <EmailInput
          id="from"
          value={userMessage.from}
          placeholder={"From: "}
          onChange={onChangeText}
          autoFocus={true}
        />
        <EmailInput id="subject" value={userMessage.subject} placeholder={"Add subject"} onChange={onChangeText} />
        <EmailTextBox
          id="message"
          value={userMessage.message}
          placeholder={"Type your message here.."}
          onChange={onChangeText}
        />
        <EmailButton themeState={themeState}>send</EmailButton>
      </EmailContainer>
    </Container>
  );
};

export default ContactPage;
