import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily.body};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.m};
  margin-top: 42px;
  margin-bottom: 28px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.bxxl};
    margin-top: 90px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.bxxl};
    margin-top: 60px;
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
`;