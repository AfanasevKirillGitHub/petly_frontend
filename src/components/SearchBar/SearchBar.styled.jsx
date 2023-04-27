import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Input = styled.input`
  outline: none;
  border:none;
  width: 280px;
  height: 40px;
  padding: 9px 12px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.m};
  color: ${props => props.theme.colors.searchText};
  background-color:  ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.medium};
  box-shadow: 7px 4px 14px 0px #31150412;
  &:focus {
    outline: none;
    border: 1px solid #F5925680
  }
  @media screen and (min-width: 768px) {
    width: 608px;
    height: 44px;
    padding: 8px 20px;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.s};
  }
`;

export const Button = styled.button`
  position: absolute;
  cursor: pointer;
  right: 15px;
  top: 10px;
  border: none;
  background-color: transparent;
`;

