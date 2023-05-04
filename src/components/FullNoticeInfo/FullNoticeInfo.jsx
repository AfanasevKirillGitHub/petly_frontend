import { useSelector } from 'react-redux';
import {
  useAddNoticesToFavoriteMutation,
  useFetchByIdQuery,
  useRemoveNoticesFromFavoriteMutation,
} from '../../redux/notices/noticesOperations';
import { Loader } from '../Loader/Loader';
import * as SC from './FullNoticeInfo.styled';

export const FullNoticeInfo = ({ id, noticeCategory, isFavorite }) => {
  const { data, isFetching } = useFetchByIdQuery({
    id,
    lang: 'en',
  });

  const defaultPicture = 'https://loremflickr.com/250/250/cat/all';

  const currentUserId = useSelector(state => state.auth.user.id);

  const [removeFav] = useRemoveNoticesFromFavoriteMutation();
  const [addToFav] = useAddNoticesToFavoriteMutation();

  const onFavoriteClick = () => {
    if (!currentUserId) {
      alert('Please log in first');
      return;
    }
    if (isFavorite === 'true') {
      removeFav(id);
    } else addToFav(id);
  };

  return (
    <>
      {isFetching && <Loader />}
      {data && (
        <SC.CardWrapper>
          <SC.MainInfoWrapper style={{ display: 'flex' }}>
            <SC.ImageWrapper>
              <SC.Image
                src={data.fullNotice.avatarURL || defaultPicture}
                alt={data.fullNotice.name}
              />
              <SC.CategoryLabel>{noticeCategory}</SC.CategoryLabel>
            </SC.ImageWrapper>
            <SC.TextWrapper>
              <SC.HeaderWrapper>
                <SC.TextHeader>{data.fullNotice.title.en}</SC.TextHeader>
              </SC.HeaderWrapper>
              <SC.TextLinesWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Name:</SC.TextLineName>
                  <SC.TextLineValue>{data.fullNotice.name}</SC.TextLineValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Birthday:</SC.TextLineName>
                  <SC.TextLineValue>
                    {new Date(data.fullNotice.birthdate).toLocaleDateString(
                      'ru-RU'
                    )}
                  </SC.TextLineValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Breed:</SC.TextLineName>
                  <SC.TextLineValue>
                    {data.fullNotice.breed.en}
                  </SC.TextLineValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Place:</SC.TextLineName>
                  <SC.TextLineValue>
                    {data.fullNotice.location.city.en}
                  </SC.TextLineValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>The sex:</SC.TextLineName>
                  <SC.TextLineValue>{data.fullNotice.sex}</SC.TextLineValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Email:</SC.TextLineName>
                  <SC.ContactValue
                    href={'mailto:' + data.fullNotice.owner.email}
                  >
                    {data.fullNotice.owner.email}
                  </SC.ContactValue>
                </SC.TextLineWrapper>
                <SC.TextLineWrapper>
                  <SC.TextLineName>Phone:</SC.TextLineName>
                  <SC.ContactValue href={'tel:' + data.fullNotice.owner.phone}>
                    {data.fullNotice.owner.phone}
                  </SC.ContactValue>
                </SC.TextLineWrapper>
                {data.fullNotice.price !== 0 && (
                  <SC.TextLineWrapper>
                    <SC.TextLineName>Price:</SC.TextLineName>
                    <SC.TextLineValue>
                      {data.fullNotice.price}$
                    </SC.TextLineValue>
                  </SC.TextLineWrapper>
                )}
              </SC.TextLinesWrapper>
            </SC.TextWrapper>
          </SC.MainInfoWrapper>

          <SC.CommentsWrapper>
            <SC.CommentLabel>Comments: </SC.CommentLabel>
            <SC.Comment>{data.fullNotice.comments.en}</SC.Comment>
          </SC.CommentsWrapper>

          <SC.ButtonList>
            <li>
              <SC.CardButton onClick={onFavoriteClick}>
                {isFavorite === 'true' ? 'remove' : 'add to'}
                <SC.HeartIcon size={20} favorite={isFavorite} />
              </SC.CardButton>
            </li>
            <li>
              <SC.CardButton>contact</SC.CardButton>
            </li>
          </SC.ButtonList>
        </SC.CardWrapper>
      )}
    </>
  );
};
