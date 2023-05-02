import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  @media (min-width: 768px) {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    padding-top: 200px;
  }
  @media (min-width: 1280px) {
    padding-top: 80px;
  }
`;
