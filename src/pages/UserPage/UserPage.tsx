import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { UserData } from '../../components/UserData/UserData';

export const UserPage: React.FC = () => {
  const modalHandler = (): void => {
    console.log('working');
  };
  return (
    <>
      <UserData />
      <AddPetBtn toggleModal={modalHandler} />
    </>
  );
};
