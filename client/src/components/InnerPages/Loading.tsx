import { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as Spinner } from "../../svg/spinner.svg";
import { theme } from "../../theme/Theme";
import ThemeContext from "../../context/theme/themeContext";
import { IStyledProps } from "../../interfaces/types";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  right: ${theme.spacing.space.medium};
  bottom: ${theme.spacing.space.medium};

  @keyframes SpinningAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(179deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation-name: SpinningAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const SpinnerBGContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  right: ${theme.spacing.space.medium};
  bottom: ${theme.spacing.space.medium};

  border-radius: 15px;
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};
  box-shadow: 5px 6px 0 ${(props: IStyledProps) => props.themeState.shadowColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerSVG = styled(Spinner)`
  width: 50px;
  height: 50px;

  @keyframes SpinningAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(179deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation-name: SpinningAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export default function Loading() {
  const { theme } = useContext(ThemeContext);

  return (
    <SpinnerBGContainer themeState={theme}>
      <SpinnerSVG />
    </SpinnerBGContainer>
  );
}
