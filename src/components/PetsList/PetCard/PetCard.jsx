import { useTranslation } from 'react-i18next';
import { NoPetImage } from '../../common/NoPetImage';
import * as SC from './PetCard.styled';
import { SVG } from '../../../helpers/icons/index';
import { useRemovePetsMutation } from '../../../redux/pets/petsOperations';

export const PetCard = ({
  data: { _id, name, breed, birthday, photo, comments },
}) => {
  const { t } = useTranslation();
  const [removePets, { isLoading: isRemoving }] = useRemovePetsMutation();

  return (
    //   Уся картка
    <SC.PetCard>
      {/* Врапер для внутрянки */}
      <SC.ImageThumb>
        {!photo ? <NoPetImage /> : <SC.Image src={photo} alt={name} />}
      </SC.ImageThumb>
      <SC.CardData>
        <SC.CardHeader>
          <ul>
            <SC.CardDataItem>
              <SC.CardDataItemTitle>
                {t('pet-card.Pet name')}:{' '}
              </SC.CardDataItemTitle>
              {name}
            </SC.CardDataItem>
            <SC.CardDataItem>
              <SC.CardDataItemTitle>
                {t('pet-card.Date of birth')}:{' '}
              </SC.CardDataItemTitle>
              {birthday}
            </SC.CardDataItem>
            <SC.CardDataItem>
              <SC.CardDataItemTitle>
                {t('pet-card.Breed')}:{' '}
              </SC.CardDataItemTitle>
              {breed}
            </SC.CardDataItem>
          </ul>
          <SC.DeleteBtn onClick={() => removePets(_id)} disabled={isRemoving}>
            {<SVG.Delete />}
          </SC.DeleteBtn>
        </SC.CardHeader>

        <div>
          <SC.CardDataItemTitle>
            {t('pet-card.Comments')}:{' '}
          </SC.CardDataItemTitle>
          {comments}
        </div>
      </SC.CardData>
    </SC.PetCard>
  );
};
