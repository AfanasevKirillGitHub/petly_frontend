import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData';
import { Wrapper } from '../../components/common';

export const UserPage = () => {
  return (
    <Wrapper>
      <UserData />
      <PetsData />
    </Wrapper>
  );
};
