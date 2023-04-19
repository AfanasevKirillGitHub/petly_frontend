import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  /* background-color: green; */

  /* @media (max-width: 767px) {
  } */

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
    display: flex;
    gap: ${p => p.theme.space[5]}px;
    /* background-color: red; */
  }
`;
