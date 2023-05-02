import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TitleInfo = styled.p`
  margin-bottom: 18px;
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const UserFrame = styled.div`
  position: relative;
  width: 280px;

  padding: 20px 12px 20px 12px;
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.medium};
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    margin-left: -32px;
    padding: 24px 40px 24px 32px;
    border-radius: 0px 40px 40px 0px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 411px;
    margin-left: -16px;
    margin-right: 32px;
    padding: 20px 16px;
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;

export const PhotoWrapper = styled.div`
  width: 233px;
  height: 233px;
  margin-bottom: 12px;
  border-radius: ${props => props.theme.radii.round};
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InputWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    bottom: 0;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    cursor: pointer;
  }

  &:hover img,
  &:focus img {
    cursor: pointer;
    /* transform: scale(1.05); */
  }

  &:hover button,
  &:focus button {
    cursor: pointer;
    /* transform: scale(1.05); */
    color: ${props => props.theme.colors.accent};
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 10;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const EditPhotoButton = styled.button`
  display: flex;
  align-items: start;
  justify-content: center;
  color: ${props => props.theme.colors.black};
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xxs};
  line-height: 22px;

  background-color: transparent;
  border: none;
  transition: color 250ms linear, transform 250ms linear;
`;

export const EditPhotoIcon = styled.img`
  width: 20px;
  margin-right: 5px;
  transition: transform 250ms linear;

  @media screen and (max-width: 767px) {
    width: 18px;
  }
`;

export const EditPhotoText = styled.div``;

export const EditPhotoIconDone = styled.img`
  width: 20px;

  @media screen and (max-width: 767px) {
    width: 12.5px;
  }
`;

export const UserItemWrapper = styled.div`
  max-width: 248px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;

    max-width: 380px;
    width: 100%;
  }
`;

export const LogoutButton = styled.button`
  padding: 0;
  margin-top: 42px;
  display: flex;
  align-items: center;
  border: none;
  margin-left: auto;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear, transform 250ms linear;

  &:hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    /* transform: scale(1.03); */
  }

  @media screen and (min-width: 768px) {
    align-self: start;
    margin-top: 33px;
    margin-left: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
  }
`;

export const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
