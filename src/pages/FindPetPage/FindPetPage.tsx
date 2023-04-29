import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { FindPetNan } from '../../components/FindPetNan/FindPetNan';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';
import * as SC from './FindPetPage.styled';
import AddNotice from '../../components/AddNotice/AddNotice';
import { Modal } from '../../components/Modal/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';

export const FindPetPage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <SC.Main>
      <SC.Title>{t('Find your favorite pet')}</SC.Title>
      <SearchBar />
      <SC.Wrapper>
      <FindPetNan />
      <AddPetBtn toggleModal={modalHandler} />
      </SC.Wrapper>
      {isModalOpen && (
        <Modal toggleModal={modalHandler}>
          <AddNotice toggleModal={modalHandler} />
        </Modal>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Main>
  );
};
