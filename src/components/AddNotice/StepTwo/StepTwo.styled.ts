import styled from 'styled-components';
import { IoAddSharp } from 'react-icons/io5';

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  margin-top: 28px;
  margin-bottom: 40px;
`;

export const FieldTitle = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.083;
`;

export const RadioInput = styled.input`
  visibility: hidden;
  margin: 0;
  position: absolute;
  pointer-events: none;

  :checked + span {
    color: ${p => p.theme.colors.accent};
  }
`;

export const RadioLabelSpan = styled.span`
  display: block;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.l};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  margin-bottom: 28px;
`;

export const Input = styled.input`
  display: block;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.background};

  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.625;

  :focus-within {
    outline: 1px solid #ff6101;
  }
`;

export const CommentsField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  & > textarea::placeholder {
    font-family: inherit;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.625;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  resize: none;

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.625;

  :focus-within {
    outline: 1px solid #ff6101;
  }
`;

export const HiddenInput = styled.input`
  visibility: hidden;
  position: absolute;
  pointer-events: none;
  width: max-content;
`;

export const LoadImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 140px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Plus = styled(IoAddSharp)`
  width: 70px;
  height: 70px;
  color: ${p => p.theme.colors.greyText};
`;
