import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  min-width: 320px;

  /* @media screen and (min-width: 480px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 732px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  } */
`;
