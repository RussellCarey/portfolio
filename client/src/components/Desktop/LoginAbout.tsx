import { FunctionComponent, useContext, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";
import ThemeContext from "../../../context/theme/themeContext";
import Loading from "./Spinner";
import { Text } from "../styles/styled";

export const MainDivStyle = styled.div`
  border-radius: 15px;
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};
  box-shadow: 5px 6px 0 ${(props: IStyledProps) => props.themeState.shadowColor};
`;

export const PageContainer = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 0 ${theme.spacing.space.large};
  }
`;

export const MessageContainer = styled(MainDivStyle)`
  width: 50%;
  height: max-content;
  border-radius: 15px;
  padding: ${theme.spacing.space.large};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
    padding: ${theme.spacing.space.medium};
  }
`;

interface ILoginAboutProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginAbout: FunctionComponent<ILoginAboutProps> = ({ setIsLoggedIn }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 9000);
  }, []);

  return (
    <PageContainer>
      <Loading />
      <MessageContainer themeState={theme}>
        <Text style={{ textAlign: "center" }}>
          Now loading the account of Russell Carey. <br></br> <br></br>A passionate coding obsessed English-man
          currently living in Japan. <br></br> <br></br>
          Russell creates interesting, creative and out of the box full stack projects from design to completetion that
          stretch ability and imagination. <br></br> <br></br>
          Note: Windows in this app are moveable by dragging the top of the window. They are also resizeable from the
          bottom right!
        </Text>
      </MessageContainer>
    </PageContainer>
  );
};

export default LoginAbout;
