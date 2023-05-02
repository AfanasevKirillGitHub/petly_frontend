import { useTranslation } from 'react-i18next';
import { PetsList } from '../PetsList';

import * as SC from './PetsData.styled';
import { AddPetBtn } from '../AddPetBtn/AddPetBtn';
import { useState } from 'react';
import { AddPet } from '../AddPet';

export const PetsData = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SC.Wrapper>
        <SC.PetsDataHeader>
          <SC.TitleInfo>{t('My pets')}:</SC.TitleInfo>
          <AddPetBtn toggleModal={modalHandler} />
        </SC.PetsDataHeader>

        <PetsList />
      </SC.Wrapper>
      {isModalOpen && <AddPet toggleModal={modalHandler} />}
    </>
  );
};
