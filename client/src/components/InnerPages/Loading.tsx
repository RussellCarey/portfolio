import styled from "styled-components";
import { ReactComponent as Spinner } from "../../svg/spinner.svg";
import { theme } from "../../theme/Theme";

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

const SpinnerSVG = styled(Spinner)`
  width: 50px;
  height: 50px;
`;

export default function Loading() {
  return (
    <Container>
      <SpinnerContainer>
        <SpinnerSVG />
      </SpinnerContainer>
    </Container>
  );
}
