import { useTranslation } from 'react-i18next';
import { PetsList } from '../PetsList';

export const PetsData = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h3>{t('My pets')}</h3>
        <div>
          <span>{t('Add pet')}</span>
          <button type="button">+</button>
        </div>
        <PetsList />
      </div>
    </>
  );
};
