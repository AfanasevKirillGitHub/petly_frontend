import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;

  padding-top: 57px;
  font-family: ${props => props.theme.fontFamily.body};

  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }
`;

export const TitleInfo = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const PetsDataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 0px;

    align-items: start;

    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;
