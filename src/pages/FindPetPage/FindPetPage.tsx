import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FindPetNan } from '../../components/FindPetNan/FindPetNan';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';
import * as SC from './FindPetPage.styled';
import AddNotice from '../../components/AddNotice/AddNotice';
import { Modal } from '../../components/Modal/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { SellPage } from './SellPage/SellPage';
import { LostFoundPage } from './LostFoundPage/LostFoundPage';
import { InGoodHandPage } from './InGoodHandPage/InGoodHandPage';
import { AllNoticesPage } from './AllNoticesPage/AllNoticesPage';
import { FavoritePage } from './FavoritePage/FavoritePage';
import { MyAdsPage } from './MyAdsPage/MyAdsPage';

export const FindPetPage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pathname } = useLocation();

  const modalHandler = () => {
    setIsModalOpen(prev => !prev);
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

      {!pathname.includes('sell') &&
        !pathname.includes('lost-found') &&
        !pathname.includes('good-hand') &&
        !pathname.includes('favorite') &&
        !pathname.includes('my-ads') && <AllNoticesPage />}
      {pathname.includes('sell') && <SellPage />}
      {pathname.includes('lost-found') && <LostFoundPage />}
      {pathname.includes('good-hand') && <InGoodHandPage />}
      {pathname.includes('favorite') && <FavoritePage />}
      {pathname.includes('my-ads') && <MyAdsPage />}
    </SC.Main>
  );
};
