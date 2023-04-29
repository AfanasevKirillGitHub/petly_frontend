import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { UserData } from '../../components/UserData/UserData';

import * as SC from './UserPage.styled'

export const UserPage: React.FC = () => {
  const modalHandler = (): void => {
    console.log('working');
  };
  return (
    <SC.Main>
      <UserData />
      <AddPetBtn toggleModal={modalHandler} />
    </SC.Main>
  );
};
