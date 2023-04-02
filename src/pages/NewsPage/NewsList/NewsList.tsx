import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetchNewsQuery } from '../../../redux/news/newsOperations';
import { useGetSearchParams } from '../../../huks/useGetSearchParams';
import { Hightlight } from '../../../components/Hightlight/Hightlight';
import { Loader } from '../../../components/Loader/Loader';

export const NewsList = () => {
  const { t } = useTranslation();
  const { lang, keyword } = useGetSearchParams();
  const { data, isFetching } = useFetchNewsQuery(
    { lang, keyword },
    {
      refetchOnMountOrArgChange: true,
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
      <ul>
        {data?.map(({ title, date, description, link, _id, img }) => (
          <li key={_id}>
            <h3>
              {ChangeColor((title['en'] ? title['en'] : title['ua']) as string)}
            </h3>
            <img src={img} alt={title['en'] ? title['en'] : title['ua']} />
            <p>
              {ChangeColor(
                (description['en']
                  ? description['en']
                  : description['ua']) as string
              )}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t('Read more')}
            </a>
            <p>{date}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
