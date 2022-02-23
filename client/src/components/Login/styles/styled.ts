import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";
import { ReactComponent as AboutSVG } from "../../../svg/user-regular.svg";

export const MainDivStyle = styled.div`
  border-radius: 15px;
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};
  box-shadow: 5px 6px 0 ${(props: IStyledProps) => props.themeState.shadowColor};
`;

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserIconContainer = styled(MainDivStyle)`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${theme.spacing.space.large};
`;

export const UserIcon = styled(AboutSVG)`
  width: 50%;
  height: 50%;
`;

export const FakeInputField = styled(MainDivStyle)`
  position: relative;
  width: 300px;
  height: 50px;

  padding: 0 ${theme.spacing.space.small};
  margin-bottom: ${theme.spacing.space.medium};

  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  outline: none;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor} !important;
`;

export const HelpBox = styled(MainDivStyle)`
  position: absolute;
  right: 5px;

  width: 35px;
  height: 35px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: solid 3px ${(props: IStyledProps) => props.themeState.borderColor};

  box-shadow: none;
`;

export const LoginButton = styled(MainDivStyle)`
  width: 170px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${theme.spacing.space.medium};
`;

export const AnimatedLogin = styled(LoginButton)`
  @keyframes ButtonAnimation {
    0% {
      transform: scale(100%);
    }
    50% {
      transform: scale(103%);
    }
    100% {
      transform: scale(100%);
    }
  }

  animation-name: ButtonAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &:hover {
    cursor: pointer;
    animation-duration: 0s;
  }
`;
