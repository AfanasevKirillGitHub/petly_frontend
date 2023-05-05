import numWords from 'num-words';
import { useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import {
  useAddNoticesToFavoriteMutation,
  useRemoveNoticesFromFavoriteMutation,
  useRemoveOwnMutation,
} from '../../redux/notices/noticesOperations';
import { FullNoticeInfo } from '../FullNoticeInfo/FullNoticeInfo';
import { Modal } from '../Modal/Modal';
import * as SC from './NoticeCard.styled';

export const NoticeCard = ({ data }) => {
  const {
    title,
    birthdate,
    location,
    breed,
    price,
    category,
    avatarURL,
    _id,
    favorite,
    owner,
  } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(prev => !prev);
  };

  const defaultPicture = 'https://loremflickr.com/250/250/cat/all';

  const currentUserId = useSelector(state => state.auth.user.id);

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

  const resultAge = getAge(birthdate);

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

  const noticeCategory = getCategory(category);

  const defineFavorite = () => {
    return favorite.includes(currentUserId) ? true : false;
  };

  const isFavorite = defineFavorite();

  const [removeFav] = useRemoveNoticesFromFavoriteMutation();
  const [addToFav] = useAddNoticesToFavoriteMutation();

  const onFavoriteClick = () => {
    if (!currentUserId) {
      alert('Please log in first');
      return;
    }
    if (isFavorite === true) {
      removeFav(_id);
    } else addToFav(_id);
  };

  const defineOwn = () => {
    return owner._id === currentUserId ? true : false;
  };
  const isOwn = defineOwn();

  const [removeOwn] = useRemoveOwnMutation();

  const onDeleteClick = () => {
    removeOwn(_id);
  };

  return (
    <SC.CardWrapper>
      {isModalOpen && (
        <Modal toggleModal={modalHandler}>
          <FullNoticeInfo
            id={_id}
            noticeCategory={noticeCategory}
            isFavorite={String(isFavorite)}
          />
        </Modal>
      )}
      <SC.ImageWrapper>
        <SC.Image src={avatarURL || defaultPicture} alt={title} />
        <SC.CategoryLabel>{noticeCategory}</SC.CategoryLabel>
        <SC.HeartWrapper onClick={onFavoriteClick}>
          <SC.HeartIcon size={30} favorite={String(isFavorite)} />
        </SC.HeartWrapper>
      </SC.ImageWrapper>
      <SC.TextWrapper>
        <SC.HeaderWrapper>
          <SC.TextHeader>{title}</SC.TextHeader>
        </SC.HeaderWrapper>
        <SC.TextLinesWrapper style={{ height: '107px' }}>
          <SC.TextLineWrapper>
            <SC.TextLineName>Breed:</SC.TextLineName>
            <SC.TextLineValue>{breed}</SC.TextLineValue>
          </SC.TextLineWrapper>
          <SC.TextLineWrapper>
            <SC.TextLineName>Place:</SC.TextLineName>
            <SC.TextLineValue>{location}</SC.TextLineValue>
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
            <SC.CardButton type="button" onClick={modalHandler}>
              Learn more
            </SC.CardButton>
          </li>
          {isOwn && (
            <li>
              <SC.CardButton type="button" onClick={onDeleteClick}>
                Delete {<RiDeleteBinFill></RiDeleteBinFill>}
              </SC.CardButton>
            </li>
          )}
        </SC.CardbuttonsList>
      </SC.TextWrapper>
    </SC.CardWrapper>
  );
};
