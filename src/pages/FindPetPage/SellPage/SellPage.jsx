import { NoticeCard } from '../../../components/NoticeCard/NoticeCard';
// import { noticeCardData } from '../../../components/NoticeCard/cardData';
import { useFetchByCategoryQuery } from '../../../redux/notices/noticesOperations';
// import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from './SellPage.styled';

export const SellPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(
  //   'search params -------------------------------------------------',
  //   searchParams
  // );

  const { data, isFetching } = useFetchByCategoryQuery({
    category: 'sell',
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
