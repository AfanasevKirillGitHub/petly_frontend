import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi';

export const CardWrapper = styled.li`
  display: block;
  width: 288px;
  background-color: #ffffff;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 288px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
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

export const HeartWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
`;
export const HeartIcon = styled(HiOutlineHeart)`
  /* fill: ${p => {
    return p.isfavorite === 'true' ? 'red' : '#ffffff';
  }}; */

  fill: #ffffff;
  stroke: #f59256;
  &:hover,
  &:focus {
    fill: #f59256;
  }
`;

export const TextWrapper = styled.div`
  padding: 20px 20px 12px;
`;
export const TextHeader = styled.h2`
  margin-bottom: 20px;
  font-family: Manrope-Medium;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  word-wrap: normal;

  color: #111111;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextLineWrapper = styled.div`
  display: flex;
`;

export const TextLineName = styled.p`
  width: 80px;
  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.38;
  color: #111111;
`;

export const TextLineValue = styled.p`
  width: 100%;
  font-family: Manrope-Medium;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.38;
  color: #111111;
`;

export const TextLinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 8px;
`;

export const CardbuttonsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 10px;

  width: 248px;
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

  &:hover,
  &:focus {
    color: #ff6101;
    border: 2px solid #ff6101;
  }
`;
