import { HiOutlineHeart } from 'react-icons/hi';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  padding: 32px 20px;

  background: #ffffff;
  border-radius: 16px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 288px;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 328px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
`;

export const CategoryLabel = styled.p`
  display: inline-flex;
  padding: 6px;
  align-items: center;
  justify-content: center;
  width: 158px;
  position: absolute;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #111111;
  border-radius: 0px 40px 40px 0px;

  font-family: Manrope-Medium;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const TextWrapper = styled.div`
  padding: 0px 35px 0px 20px;
`;

export const HeaderWrapper = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextHeader = styled.h2`
  font-family: Manrope-Medium;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  word-wrap: normal;

  color: #000000;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextLinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 20px; */
  gap: 8px;
`;

export const TextLineWrapper = styled.div`
  display: flex;
`;

export const TextLineName = styled.p`
  display: block;
  width: 189px;
  font-family: Manrope-Medium;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.37;
  color: #000000;
`;

export const TextLineValue = styled.p`
  width: 100%;
  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #000000;
`;

export const ContactValue = styled.a`
  width: 100%;
  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.37;
  color: #f59256;
  &:hover,
  &:focus {
    color: #ff6101;
    transform: scale(1.02);
  }
`;

export const CommentsWrapper = styled.div`
  padding: 28px 0px 32px;
`;

export const CommentLabel = styled.span`
  font-family: Manrope-Medium;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  letter-spacing: 0.04em;

  color: #000000;
`;

export const Comment = styled.span`
  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const ButtonList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 12px;
  padding-right: 20px;
  list-style: none;
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 10px;

  width: 160px;
  height: 38px;

  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #f59256;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #f59256;

    border: 2px solid #f59256;
  }
`;

export const HeartWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeartIcon = styled(HiOutlineHeart)`
  fill: ${p => {
    return p.favorite === 'true' ? '#ffffff' : '#f59256';
  }};
  stroke: #f59256;

  ${CardButton}:hover & {
    fill: #ffffff;
    stroke: #ffffff;
  }
`;
