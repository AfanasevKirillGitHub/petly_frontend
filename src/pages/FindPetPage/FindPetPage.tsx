import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { FindPetNan } from '../../components/FindPetNan/FindPetNan';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';
import * as SC from './FindPetPage.stuled';

export const FindPetPage = () => {
  const { t } = useTranslation();
  return (
    <SC.Main>
      <SC.Title>{t('Find your favorite pet')}</SC.Title>
      <SearchBar />
      <FindPetNan />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Main>
  );
};
