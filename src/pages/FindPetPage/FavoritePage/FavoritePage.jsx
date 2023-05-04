import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
import { useFetchFavoriteQuery } from '../../../redux/notices/noticesOperations';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from '../List.styled';
import { useGetSearchParams } from '../../../hooks/useGetSearchParams';

export const FavoritePage = () => {
  const { lang, keyword } = useGetSearchParams();

  const { data, isFetching } = useFetchFavoriteQuery({
    lang,
    key: keyword,
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
