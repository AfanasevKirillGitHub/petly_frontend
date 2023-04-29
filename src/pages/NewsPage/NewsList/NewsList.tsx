import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetchNewsQuery } from '../../../redux/news/newsOperations';
import { useGetSearchParams } from '../../../hooks/useGetSearchParams';
import { Hightlight } from '../../../components/Hightlight/Hightlight';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from './NewsList.styled';

export const NewsList = () => {
  const { t } = useTranslation();
  const { lang, keyword } = useGetSearchParams();
  const { data, isFetching } = useFetchNewsQuery(
    { lang, keyword },
    {
      refetchOnMountOrArgChange: true,
      skip: keyword.length >= 1 && keyword.length < 3,
    }
  );

  const ChangeColor = useCallback(
    (str: string) => {
      return <Hightlight filter={keyword} str={str} />;
    },
    [keyword]
  );

  return (
    <>
      {isFetching && <Loader />}
      <SC.NewsList>
        {data?.map(({ title, date, description, link, _id, img }) => (
          <SC.NewsListItem key={_id}>
            <SC.Img src={img} alt={title['en'] ? title['en'] : title['ua']} />
            <SC.Title>
              {ChangeColor((title['en'] ? title['en']?.slice(0,40)+ '...' : title['ua']?.slice(0,40)+ '...') as string)}
            </SC.Title>
            <SC.Subtitle>
              {ChangeColor(
                (description['en']
                  ? description['en']?.slice(0,300)+ '...'
                  : description['ua']?.slice(0,300)+ '...') as string
              )}
            </SC.Subtitle>
            <SC.Wrapper>
            <SC.Date>{new Date(date).toLocaleDateString('en-GB')}</SC.Date>
            <SC.Link href={link} target="_blank" rel="noopener noreferrer">
              {t('Read more')}
            </SC.Link>
            </SC.Wrapper>
          </SC.NewsListItem>
        ))}
      </SC.NewsList>
    </>
  );
};
