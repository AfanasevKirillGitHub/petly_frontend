import styled from 'styled-components';

import bgM from '../../helpers/photos/homepage/bgM.png';
import bgT from '../../helpers/photos/homepage/bgT.png';
import bgD from '../../helpers/photos/homepage/bgD.png';

import DogM from '../../helpers/photos/homepage/dogM.png';
import DogT from '../../helpers/photos/homepage/dogT.png';
import DogD from '../../helpers/photos/homepage/dogD.png';

import heart from '../../helpers/photos/homepage/heart.png';

export const HomePage = styled.div`
  height: 100%;
  position: relative;
  @media screen and (max-width: 767px) {
    height: 600px;
    background: url(${DogM}), url(${bgM});
    background-size: 280px auto, 620px auto;
    background-position: bottom 0px left 50%, bottom -50px left 25%;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 1100px;
    background: url(${DogT}), url(${bgT});
    background-size: 636px auto, 1400px auto;
    background-position: bottom 0px left 50%, bottom -140px left 25%;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1280px) {
    height: calc(100vh - 63px);
    background-image: url(${DogD}), url(${bgD});
    background-position: bottom 0px left 95%, bottom 0px left 0px;
    background-size: 524px, contain;
    background-repeat: no-repeat;
  }
`;

export const Title = styled.h1`
  width: 280px;
  padding-top: 60px;
  margin-left: 20px;
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.m};
  color: ${props => props.theme.colors.black};
  @media screen and (min-width: 768px) {
    width: 588px;
    padding-top: 90px;
    font-size: ${props => props.theme.fontSizes.bxxxl};
    line-height: ${props => props.theme.lineHeights.xl};
  }
  @media screen and (min-width: 1280px) {
    padding-top: 103px;
  }
`;

export const Heart = styled.div`
  @media screen and (min-width: 1280px) {
    background-image: url(${heart});
    width: 90px;
    height: 90px;
    position: absolute;
    right: 500px;
    top: 100px;
  }
`;
