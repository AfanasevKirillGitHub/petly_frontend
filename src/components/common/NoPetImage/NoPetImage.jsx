import { useTranslation } from 'react-i18next';
import * as SC from './NoPetImage.styled';

export const NoPetImage = () => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.TopText>{t('no-pet-image.No image')}</SC.TopText>
      <SC.Image />
      <SC.BottomText>{t('no-pet-image.Only Me')}</SC.BottomText>
    </SC.Wrapper>
  );
};
