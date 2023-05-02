import styled from 'styled-components';
import { SVG } from '../../../helpers/icons';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  /* height: 240px; */

  background-color: ${p => p.theme.colors.petAvatarGrey};

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

export const Image = styled(SVG.NoPetSvg)`
  width: 100%;
  height: 100%;
`;
