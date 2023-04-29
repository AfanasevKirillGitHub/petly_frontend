import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// interface ICellBirhtDayProps {
//   birthDay?: boolean;
//   selected?: Date;
//   type: string;
//   input: boolean;
// }

export const Text = styled.p`
  margin-bottom: 38px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.l};
  text-align: center;
  letter-spacing: -0.01em;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-bottom: 28px;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const RadioInput = styled.input`
  visibility: hidden;
  margin: 0;
  width: 8px;

  &:checked + span {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: 12px;
  }
`;

export const RadioLabelSpan = styled.span`
  display: block;
  padding: 10px 28px;

  cursor: pointer;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.l};
  letter-spacing: 0.04em;

  border: ${p => p.theme.borders.orange};
  border-radius: ${p => p.theme.radii.big};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  :not(:last-of-type) {
    margin-bottom: 28px;
  }
`;

export const FieldTitle = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.083;
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

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.625;

  :focus-within {
    outline: 1px solid #ff6101;
  }
`;

// export const DatePick = styled(DatePicker)<ICellBirhtDayProps>`
//   width: 299px;
//   height: 42px;
//   padding-left: 18px;
//   margin-top: 8px;
//   border: ${p =>
//     (!p.birthDay && p.theme.borders.userInput) ||
//     (p.birthDay && p.selected === null && '1px solid red') ||
//     (p.birthDay && p.selected !== null && '1px solid green')};
//   border-radius: 8px;
//   background-color: ${p => p.theme.colors.white};
//   font-family: 'Inter';
//   font-weight: ${p => p.theme.fontWeights.semiBold};
//   font-size: ${p => p.theme.fontSizes.s};
//   line-height: ${p => p.theme.lineHeights.xl};
//   color: ${p => p.theme.colors.black5};
//   @media screen and (min-width: 768px) {
//     width: 354px;
//     height: 46px;
//     font-size: ${p => p.theme.fontSizes.m};
//   }
// `;
