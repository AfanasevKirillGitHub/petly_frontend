import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms linear;

  :hover {
    transform: scale(1.4);
  }
`;
