import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: 57px;
  font-family: ${props => props.theme.fontFamily.body};
`;

export const TitleInfo = styled.p`
  margin-bottom: 24px;
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 1.36;
`;

export const UserFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 541px;
  margin-left: -16px;
  padding: 20px 16px 18px 16px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.main};
  border-radius: ${props => props.theme.radii.none}
    ${props => props.theme.radii.big} ${props => props.theme.radii.big}
    ${props => props.theme.radii.none};
`;

export const PhotoWrapper = styled.div``;

export const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 233px;
  margin: 0 auto;
  border: 1px solid red;
  filter: drop-shadow(${props => props.theme.shadows.avatar});
  border-radius: 50%;
  overflow: hidden;

  /* @media screen and (max-width: 767px) {
    position: absolute;
    top: -36px;
    left: 132px;
    background-color: ${props => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  } */
`;

export const Photo = styled.img`
  scale: 1.4;
`;

export const EditPhotoLink = styled.p`
  position: absolute;
  bottom: 0;
  right: ${props => props.theme.space[4]}px;
  font-weight: 400;
`;
