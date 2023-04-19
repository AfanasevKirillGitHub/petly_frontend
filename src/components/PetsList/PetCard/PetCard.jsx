import { useTranslation } from 'react-i18next';
import { NoPetImage } from '../../common/NoPetImage';
import * as SC from './PetCard.styled';

export const PetCard = ({
  data: { name, breed, birthday, photo, comments },
}) => {
  const { t } = useTranslation();

  return (
    //   Уся картка
    <SC.PetCard>
      {/* Врапер для внутрянки */}
      <SC.ImageThumb>{photo && <NoPetImage />}</SC.ImageThumb>
      <SC.CardData>
        <SC.CardHeader>
          <div>
            <p>
              <span>{t('pet-card.Pet name')}: </span>
              {name}
            </p>
            <p>
              <span>{t('pet-card.Date of birth')}: </span>
              {birthday}
            </p>
            <p>
              <span>{t('pet-card.Breed')}: </span>
              {breed}
            </p>
          </div>
          <button>X</button>
        </SC.CardHeader>

        <SC.CardComments>
          <span>{t('pet-card.Comments')}: </span>
          {comments}
        </SC.CardComments>
      </SC.CardData>
    </SC.PetCard>
  );
};
