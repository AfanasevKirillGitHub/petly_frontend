import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
import { useFetchByCategoryQuery } from '../../../redux/notices/noticesOperations';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from '../List.styled';
import { useGetSearchParams } from '../../../hooks/useGetSearchParams';

export const LostFoundPage = () => {
  const { lang, keyword } = useGetSearchParams();

  const { data, isFetching } = useFetchByCategoryQuery({
    category: 'lost-found',
    lang,
    key: keyword,
  });

  return (
    <>
      {isFetching && <Loader />}
      <SC.CardsList>
        {data?.notices.map(notice => (
          <NoticeCard data={notice} key={notice._id}></NoticeCard>
        ))}
      </SC.CardsList>
    </>
  );
};
