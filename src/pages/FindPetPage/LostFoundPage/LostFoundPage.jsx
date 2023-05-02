import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
import { useFetchByCategoryQuery } from '../../../redux/notices/noticesOperations';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from '../List.styled';

export const LostFoundPage = () => {
  const { data, isFetching } = useFetchByCategoryQuery({
    category: 'lost-found',
    lang: 'en',
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
