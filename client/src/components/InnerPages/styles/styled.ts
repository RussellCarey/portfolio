import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const DesktopContainer = styled.div`
  width: 100vw;
  height: calc(100% - 80px);
  padding: 10px;

  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

// Texts
export const PaleText = styled.p`
  flex: 1;
  color: #84847e;
  text-align: left;

  margin-bottom: ${theme.spacing.space.xsmall};
`;

export const Text = styled.p`
  flex: 2;
  color: ${theme.colors.text.primary};
`;

export const DescriptionText = styled.p`
  flex: 2;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.space.medium};
`;
