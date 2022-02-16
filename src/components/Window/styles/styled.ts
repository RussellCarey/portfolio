import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { motion } from "framer-motion";

import { IStyledProps } from "../../../interfaces/styled";
import { IWindowContainerPos } from "../types/interfaces";

export const WindowContainer = styled(motion.div).attrs((props: IWindowContainerPos) => ({
  style: {
    top: props.position.top ? props.position.top + "px" : "100px",
    left: props.position.left ? props.position.left + "px" : "100px",
    width: props.dimensions.width ? props.dimensions.width + "px" : "80vw",
    height: props.dimensions.height ? props.dimensions.height + "px" : "83vh",
  },
}))`
  display: flex;
  flex-direction: row;
  position: absolute;

  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  box-shadow: 20px 20px 0 ${(props) => props.themeState.borderColor};

  z-index: ${(props: any) => (props.windowList.length > 0 ? props.windowList.length * 10 + 100 : 100)};

  overflow: hidden;
`;
