import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 280px;

  font-family: ${props => props.theme.fontFamily.body};

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding-top: 0px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 821px;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 24px;

  & > button {
    position: absolute;
    right: 0;
    top: -9px;

    @media screen and (min-width: 768px) {
      top: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 0px;

    align-items: start;

    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;
