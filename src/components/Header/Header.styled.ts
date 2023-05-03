import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 24px 0px 0 0px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 30px 0 0 0;
  }
`;
