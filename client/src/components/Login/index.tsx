import React, { useEffect, useContext, useState, FunctionComponent, useRef } from "react";
import ThemeContext from "../../context/theme/themeContext";
import {
  PageContainer,
  UserIconContainer,
  UserIcon,
  InputField,
  FakeInputField,
  HelpBox,
  LoginButton,
  AnimatedLogin,
} from "./styles/styled";
import { delayTime } from "./utils/typing";
import Loading from "../InnerPages/Loading";

interface ILoginPage {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: FunctionComponent<ILoginPage> = ({ setIsLoggedIn }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nameState, setNameState] = useState<string>("");
  const [passwordState, setPasswordState] = useState<string>("");
  const nameRef = useRef<string>("");
  const passwordRef = useRef<string>("");

  const populateFieldTyping = async (
    ref: React.MutableRefObject<string>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    startDelay: number
  ) => {
    await delayTime(startDelay);
    // Set blinking? For the text line?

    // set type speed to a state (random?)

    const textArray = text.split("");
    // Remember forEach is not async. Use for of..
    for (const letter of textArray) {
      const typingDelayTime = Math.random() * 300;
      await delayTime(typingDelayTime);
      ref.current = ref.current + letter;
      setState(ref.current);
    }
  };

  useEffect(() => {
    populateFieldTyping(nameRef, setNameState, "Russell Carey", 0);
    populateFieldTyping(passwordRef, setPasswordState, "*****************", 3000);
  }, []);

  return (
    <PageContainer>
      {!isLoading ? (
        <>
          <UserIconContainer themeState={theme}>
            <UserIcon />
          </UserIconContainer>
          <FakeInputField themeState={theme}>
            <InputField themeState={theme} type="text" value={nameState} />
          </FakeInputField>
          <FakeInputField themeState={theme}>
            <InputField themeState={theme} type="text" value={passwordState} />
            <HelpBox themeState={theme}>?</HelpBox>
          </FakeInputField>
          <AnimatedLogin themeState={theme} onClick={() => setIsLoggedIn(true)}>
            login
          </AnimatedLogin>
        </>
      ) : (
        <Loading />
      )}
    </PageContainer>
  );
};

export default LoginPage;
