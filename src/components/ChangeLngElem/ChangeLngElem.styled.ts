import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
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
