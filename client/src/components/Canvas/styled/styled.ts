import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";

export const ControlContainer = styled.div`
  width: 190px;
  position: absolute;
  top: 10px;
  right: 10px;

  padding: ${theme.spacing.space.small};

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: ${theme.spacing.space.small};
  border: 2px solid black;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export const PopupContainer = styled.div`
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  position: relative;
  width: max-content;
  max-width: 50%;

  padding: ${theme.spacing.space.large};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  border-radius: 15px;
`;

export const PopupClose = styled(Button)`
  margin-top: ${theme.spacing.space.medium};
`;
