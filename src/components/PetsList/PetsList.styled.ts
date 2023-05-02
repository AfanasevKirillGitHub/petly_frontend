import styled from 'styled-components';

export const PetList = styled.ul`
  list-style: none;
  align-self: center;
`;
export const PetListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
`;
