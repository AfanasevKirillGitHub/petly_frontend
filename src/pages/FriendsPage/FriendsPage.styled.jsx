import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.m};
  margin-bottom: 28px;
  margin-top: 42px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.bxxl};
    margin-bottom: 40px;
    margin-top: 90px;
  }
  @media screen and (min-width: 1280px){
    font-size: ${props => props.theme.fontSizes.bxxl};
    margin-bottom: 60px;
    margin-top: 60px;
  }
`;