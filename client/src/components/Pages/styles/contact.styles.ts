import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";

export const Container = styled.div`
  padding: ${theme.spacing.space.large};
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  font-size: ${theme.font.fontsizes.h4};
  color: ${(props: IStyledProps) => props.themeState.textColor};

  color: ${(props) => props.themeState.textColor};
`;

export const Form = styled.input`
  width: 60%;
  font-size: ${theme.font.fontsizes.h4};
  padding: ${theme.spacing.space.medium};
  margin-bottom: ${theme.spacing.space.large};
  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  outline: none;
  box-shadow: 3px 4px 0 ${(props) => props.themeState.borderColor};
`;

export const TextArea = styled.textarea`
  font-size: ${theme.font.fontsizes.h4};
  width: 100%;
  min-height: 200px;
  padding: ${theme.spacing.space.medium};
  margin-bottom: ${theme.spacing.space.large};
  resize: none;
  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  outline: none;
  box-shadow: 3px 4px 0 ${(props: IStyledProps) => props.themeState.borderColor};
`;

export const Button = styled.button`
  padding: ${theme.spacing.space.medium};
  font-size: ${theme.font.fontsizes.h4};
  width: 200px;
  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  outline: none;
  box-shadow: 3px 4px 0 ${(props: IStyledProps) => props.themeState.borderColor};
`;
