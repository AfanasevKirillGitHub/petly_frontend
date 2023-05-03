import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 0 80px 0;

  @media (min-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    padding: 58px 0px 0px 0px;
  }
`;
