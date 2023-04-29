import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: 57px;

  /* @media (min-width: 768px) {
        padding-top: 200px;
    }
    @media (min-width: 1280px) {
        padding-top: 80px;
    }; */
`;
