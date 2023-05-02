import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
import { useFetchFavoriteQuery } from '../../../redux/notices/noticesOperations';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from '../List.styled';

export const FavoritePage = () => {
  const { data, isFetching } = useFetchFavoriteQuery({
    lang: 'en',
  });

  return (
    <>
      {isFetching && <Loader />}
      <SC.CardsList>
        {data?.favoriteNotices.map(notice => (
          <NoticeCard data={notice} key={notice._id}></NoticeCard>
        ))}
      </SC.CardsList>
    </>
  );
};
