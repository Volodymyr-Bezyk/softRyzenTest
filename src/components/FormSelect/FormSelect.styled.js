import styled from 'styled-components';

export const FormLabel = styled.label`
  position: relative;
  width: 240px;

  margin-bottom: ${p => p.theme.space[10]}px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const FormLabelText = styled.span`
  margin-bottom: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: 0.4px;
`;

export const ValidationErrorText = styled.span`
  position: absolute;
  right: 19px;
  bottom: -20px;

  color: ${p => p.theme.colors.highPriority};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.33;
`;
