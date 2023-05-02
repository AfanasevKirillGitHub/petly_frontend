import styled from 'styled-components';

export const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  display: block;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 14px;
  padding-right: 14px;
  width: 100%;
  height: 40px;

  outline: ${p => p.theme.borders.input};
  border: none;

  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.background};

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.m};

  :focus-within {
    outline: 1px solid #ff6101;
  }

  ::placeholder {
    color: ${p => p.theme.colors.placeholders};
  }
`;
