import styled from 'styled-components';
import { ReactComponent as NoPetSvg } from './noPetImage.svg';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  /* height: 240px; */

  background-color: ${p => p.theme.colors.white};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
  /* border: solid 1px; */
`;

export const TopText = styled.p`
  position: absolute;
  top: 5%;

  width: 100%;
`;

export const BottomText = styled.p`
  position: absolute;
  bottom: 7%;

  width: 100%;
`;

export const Image = styled(NoPetSvg)`
  width: 100%;
  height: 100%;
`;
