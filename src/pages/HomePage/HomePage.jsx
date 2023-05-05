import { useTranslation } from 'react-i18next';
import * as SC from './HomePage.styled';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <SC.HomePage>
      <SC.Title>{t(`Take good care of your small pets`)}</SC.Title>
      <SC.Heart />
    </SC.HomePage>
  );
};
