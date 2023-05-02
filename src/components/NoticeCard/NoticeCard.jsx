import numWords from 'num-words';
import { RiDeleteBinFill } from 'react-icons/ri';
import {
  useAddNoticesToFavoriteMutation,
  useRemoveNoticesFromFavoriteMutation,
} from '../../redux/notices/noticesOperations';
import * as SC from './NoticeCard.styled';

const defaultPicture = 'https://loremflickr.com/250/250/cat/all';

export const NoticeCard = ({ data }) => {
  const { title, birthdate, location, breed, price, category, avatarURL, _id } =
    data;

  const getAge = date => {
    const totalMonths = Math.ceil(
      (new Date().getTime() - new Date(date)) / (1000 * 60 * 60 * 24 * 30)
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths - years * 12;

    const yearsWord = numWords(years);
    const monthsWord = numWords(months);

    if (yearsWord !== 'zero' && monthsWord !== 'zero')
      return `${yearsWord} ${
        yearsWord === 'one' ? 'year' : 'years'
      } ${monthsWord} ${monthsWord === 'one' ? 'month' : 'months'}`;

    if (yearsWord === 'zero') {
      return `${monthsWord} ${monthsWord === 'one' ? 'month' : 'months'}`;
    }

    if (monthsWord === 'zero') {
      return `${yearsWord} ${yearsWord === 'one' ? 'year' : 'years'}`;
    }
  };

  const getCategory = category => {
    if (category === 'sell') {
      return 'sell';
    }
    if (category === 'for-free') {
      return 'in good hands';
    }
    if (category === 'lost-found') {
      return 'lost/found';
    }
  };

  const resultAge = getAge(birthdate);
  const noticeCategory = getCategory(category);

  const [addToFav, { isLoading: isAdding }] = useAddNoticesToFavoriteMutation();
  const [removeFromFav, { isLoading: isRemoving }] =
    useRemoveNoticesFromFavoriteMutation();

  return (
    <SC.CardWrapper>
      <SC.ImageWrapper>
        <SC.Image
          src={avatarURL || defaultPicture}
          alt="fds"
          style={{ width: '288px' }}
        />
        <SC.CategoryLabel>{noticeCategory}</SC.CategoryLabel>
        <SC.HeartWrapper onClick={() => removeFromFav(_id)}>
          {/* <SC.HeartIcon size={30} isfavorite={'true'} /> */}
          <SC.HeartIcon size={30} />
        </SC.HeartWrapper>
      </SC.ImageWrapper>
      <SC.TextWrapper>
        <SC.TextHeader>{title.en}</SC.TextHeader>
        <SC.TextLinesWrapper>
          <SC.TextLineWrapper>
            <SC.TextLineName>Breed:</SC.TextLineName>
            <SC.TextLineValue>{breed.en}</SC.TextLineValue>
          </SC.TextLineWrapper>
          <SC.TextLineWrapper>
            <SC.TextLineName>Place:</SC.TextLineName>
            <SC.TextLineValue>{location.city.en}</SC.TextLineValue>
          </SC.TextLineWrapper>
          <SC.TextLineWrapper>
            <SC.TextLineName>Age:</SC.TextLineName>
            <SC.TextLineValue>{resultAge}</SC.TextLineValue>
          </SC.TextLineWrapper>
          {price !== 0 && (
            <SC.TextLineWrapper>
              <SC.TextLineName>Price:</SC.TextLineName>
              <SC.TextLineValue>{price}$</SC.TextLineValue>
            </SC.TextLineWrapper>
          )}
        </SC.TextLinesWrapper>
        <SC.CardbuttonsList>
          <li>
            <SC.CardButton type="button">Learn more</SC.CardButton>
          </li>
          <li>
            <SC.CardButton type="button">
              Delete {<RiDeleteBinFill></RiDeleteBinFill>}
            </SC.CardButton>
          </li>
        </SC.CardbuttonsList>
      </SC.TextWrapper>
    </SC.CardWrapper>
  );
};
