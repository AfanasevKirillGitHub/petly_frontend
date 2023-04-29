import { useTranslation } from 'react-i18next';
import { PetsList } from '../PetsList';

import * as SC from './PetsData.styled';

export const PetsData = () => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.TitleInfo>{t('My pets')}:</SC.TitleInfo>
      <div>
        <span>{t('Add pet')}</span>
        <button type="button">+</button>
      </div>
      <PetsList />
    </SC.Wrapper>
  );
};
