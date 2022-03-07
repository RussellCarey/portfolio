import React, { useEffect, useContext, useState, FunctionComponent, useRef } from "react";
import ThemeContext from "../../context/theme/themeContext";
import LoginAbout from "../Desktop/LoginAbout";
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

interface ILoginPage {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: FunctionComponent<ILoginPage> = ({ setIsLoggedIn }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clickedLogin, setClickedLogin] = useState<boolean>(false);
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
    await delayTime(startDelay, () => {});
    const textArray = text.split("");

    for (const letter of textArray) {
      const typingDelayTime = Math.random() * 200;

      await delayTime(typingDelayTime, () => {
        ref.current = ref.current + letter;
        setState(ref.current);
      });
    }

    if (startDelay > 1000) setIsLoading(false);
  };

  useEffect(() => {
    populateFieldTyping(nameRef, setNameState, "Russell Carey", 1000);
    populateFieldTyping(passwordRef, setPasswordState, "**********", 3000);
  }, []);

  return !clickedLogin ? (
    <PageContainer>
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

        {isLoading ? (
          <LoginButton themeState={theme}>loading</LoginButton>
        ) : (
          <AnimatedLogin themeState={theme} onClick={() => setClickedLogin(true)}>
            login
          </AnimatedLogin>
        )}
      </>
    </PageContainer>
  ) : (
    <LoginAbout setIsLoggedIn={setIsLoggedIn} />
  );
};

export default LoginPage;
