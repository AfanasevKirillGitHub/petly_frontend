import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 57px;

  @media (min-width: 768px) {
    flex-direction: row;

    padding-top: 200px;
  }
  @media (min-width: 1280px) {
    padding-top: 80px;
  }
`;
