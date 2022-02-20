import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { motion } from "framer-motion";

import { IStyledProps } from "../../../interfaces/types";

export const WindowContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;

  top: ${(props: any) => props.position.top + "px"};
  left: ${(props: any) => props.position.left + "px"};

  width: ${(props: any) =>
    !props.isMobile ? (props.dimensions.width ? props.dimensions.width + "px" : "80vw") : "90%"};

  height: ${(props: any) =>
    !props.isMobile ? (props.dimensions.height ? props.dimensions.height + "px" : "83vh") : "94%"};

  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  box-shadow: 20px 20px 0 ${(props) => props.themeState.borderColor};

  z-index: ${(props: any) => (props.windowList.length > 0 ? props.windowList.length * 10 + 100 : 100)};

  @media (max-width: 1000px) {
    box-shadow: none;
    width: calc(100vw - 20px);
  }
`;

export const MainWindowContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  border-radius: 0 15px 15px 0;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const CornerButtonContainer = styled.div`
  width: 34px;
  height: 34px;

  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};

  box-shadow: 2px 2px 0 ${(props) => props.themeState.borderColor};

  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const WindowContextContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  border-radius: 0 0 15px 0;

  display: flex;
  flex-direction: column;
`;

export const SideBarContainer = styled.div`
  width: 100px;
  min-width: 200px;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-right: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};

  border-radius: 15px 0 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopBarContainer = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-bottom: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};

  border-radius: 15px 15px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
