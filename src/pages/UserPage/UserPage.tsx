import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData';
import { Wrapper } from '../../components/common';

// import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
// import * as SC from './UserPage.styled'

export const UserPage: React.FC = () => {

// const modalHandler = (): void => {
//     console.log('working');
//   };

  return (
    <Wrapper>
      <UserData />
      <PetsData />
    </Wrapper>
    
    // <SC.Main>
      // <UserData />
      // <AddPetBtn toggleModal={modalHandler} />
    // </SC.Main>
  );
};
