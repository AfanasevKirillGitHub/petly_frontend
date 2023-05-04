import { useTranslation } from 'react-i18next';
import * as SC from './EmptyPetList.styled';

export const EmptyPetList = () => {
  const { t } = useTranslation();

  return <SC.Wrapper> {t('noPetsInList')}</SC.Wrapper>;
};
