import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";

export const Container = styled.div`
  padding: ${theme.spacing.space.large};
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  font-size: ${theme.font.fontsizes.h4};
  color: ${(props: IStyledProps) => props.themeState.textColor};

  color: ${(props) => props.themeState.textColor};
`;
