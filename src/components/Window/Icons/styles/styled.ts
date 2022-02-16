import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { motion } from "framer-motion";
import { IStyledProps } from "../../../../interfaces/styled";

export const WindowIconContainer = styled(motion.div)`
  width: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${theme.spacing.space.small};
  margin: ${theme.spacing.space.small};

  border-radius: 15px;
`;

export const WindowIconText = styled.p`
  font-size: ${theme.font.fontsizes.h4};
  color: ${(props: IStyledProps) => props.themeState.textColor};
`;

export const SquareIcon = styled.div`
  position: relative;
  width: ${theme.iconSize.default};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${theme.spacing.space.medium};
`;

export const SquareIconImg = styled.img`
  z-index: 10;
  fill: ${(props: IStyledProps) => props.themeState.borderColor};
`;
