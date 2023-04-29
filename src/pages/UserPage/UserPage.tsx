import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';

import * as SC from './UserPage.styled'

export const UserPage: React.FC = () => {
  return (    
    <SC.Main>
      <UserData />
      <PetsData />
    </SC.Main>
  );
};
