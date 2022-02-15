import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/styled";

export const Container = styled.div`
  padding: ${theme.spacing.space.medium};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  overflow-y: auto;

  font-size: ${theme.font.fontsizes.h3};
  color: ${(props: IStyledProps) => props.themeState.textColor};
`;

export const Text = styled.p`
  margin-bottom: ${theme.spacing.space.medium};
`;
