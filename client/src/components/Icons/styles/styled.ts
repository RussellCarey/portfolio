import styled from "styled-components";
import { IStyledProps } from "../../../interfaces/types";
import { IIconMenuContainerProps } from "../types/interfaces";
import { IIconTextProps } from "../types/interfaces";
import { theme } from "../../../theme/Theme";
import { motion } from "framer-motion";

// Container for the whole Icon component.
export const IconContainer = styled(motion.div)`
  position: relative;
  width: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${theme.spacing.space.xsmall};
  margin: ${theme.spacing.space.small};

  border-radius: 15px;
`;

// Icon Button
export const IconSquare = styled.div`
  width: ${theme.iconSize.default};
  height: ${theme.iconSize.default};
  padding: 15px;

  border-radius: 15px;
  box-shadow: 3px 4px 0 ${(props: IStyledProps) => props.themeState.borderColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  &:hover {
    background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
    cursor: pointer;
    filter: brightness(95%);
    transform: scale(101.5%);
    box-shadow: 4px 5px 0 ${(props) => props.themeState.borderColor};
  }
`;

// Text part of the Icon
export const IconText = styled.p`
  padding: ${theme.spacing.space.small};
  margin-top: ${theme.spacing.space.small};

  font-size: ${theme.font.fontsizes.h5};
  color: ${(props: IStyledProps) => props.themeState.textColor};
  border-radius: 5px;

  // If icon has been click selected
  background-color: ${(props: IIconTextProps) => (props.isSelected ? "rgba(0, 0, 0, .2)" : "transparent")};
`;

// Menu Container for right clicking the icons.
export const IconMenuContainer = styled.div<IIconMenuContainerProps>`
  z-index: 100;
  display: ${(props: any) => props.display};
  position: absolute;

  width: 150px;
  height: max-content;
  padding: ${theme.spacing.space.medium};

  top: 50px;
  left: 30px;

  flex-direction: column;

  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};

  box-shadow: 3px 4px 0 ${(props: IStyledProps) => props.themeState.borderColor};

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
