import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../helpers/icons/edit-icon.svg';
import { ReactComponent as LogoDis } from '../../helpers/icons/edit-icon-dis.svg';
import { ReactComponent as LogoDone } from '../../helpers/icons/done-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: auto;

    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const FieldText = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  width: 56px;
  font-size: ${props => props.theme.fontSizes.xxs};
  line-height: 1.33;
  display: flex;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    width: 83px;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.39;
  }
`;

export const StyledValue = styled.p`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xxs};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};

  word-break: break-all;
  padding: 4px 0 4px 24px;
  max-width: 160px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.39;

    padding: 4px 0 4px 12px;
    max-width: 216px;
    width: 100%;
  }
`;

export const StyledInput = styled(Field)`
  margin-left: 0;
  width: 160px;

  padding: 4px 2px 4px 16px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${props => props.theme.radii.big};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xxs};
  line-height: 1.33;
  outline: none;
  letter-spacing: 0.04em;

  margin-left: 7.2px;

  &:hover,
  :focus {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
  @media screen and (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.39;
    margin-left: 23.2px;
    max-width: 216px;
    width: 100%;

    padding: 4px 0 4px 12px;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.background};
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  color: ${p => p.theme.colors.accent};
  transition: background-color 250ms linear, border 250ms linear;
  &:hover,
  :focus {
    background-color: ${({ isDisabled }) => (isDisabled ? '' : '#ffffff')};
    border: ${({ isDisabled }) => (isDisabled ? '' : '0.5px solid #f59256')};
  }

  &:hover svg,
  :focus svg {
    transform: ${({ isDisabled }) => (isDisabled ? '' : 'scale(1.1)')};
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BtnImage = styled(Logo)`
  width: 12.5px;
  height: 12.5px;
  transition: transform 250ms linear;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDis = styled(LogoDis)`
  width: 12.5px;
  height: 12.5px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDone = styled(LogoDone)`
  width: 12.5px;
  height: 12.5px;
  fill: #f59256;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
