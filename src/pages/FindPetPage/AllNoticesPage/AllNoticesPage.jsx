import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
import { useFetchNoticesQuery } from '../../../redux/notices/noticesOperations';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from '../List.styled';

export const AllNoticesPage = () => {
  const { data, isFetching } = useFetchNoticesQuery({
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
