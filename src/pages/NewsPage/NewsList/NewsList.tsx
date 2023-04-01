import { useTranslation } from 'react-i18next';
import { useFetchNewsQuery } from '../../../redux/news/newsOperations';
import { useGetSearchParams } from '../../../huks/useGetSearchParams';

export const NewsList = () => {
  const { t } = useTranslation();
  const { lang, keyword } = useGetSearchParams();
  const { data } = useFetchNewsQuery(
    { lang, keyword },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  console.log(keyword);

  return (
    <ul>
      {data?.map(({ title, date, description, link, _id, img }) => (
        <li key={_id}>
          <h3>{title['en'] ? title['en'] : title['ua']}</h3>
          <img src={img} alt={title['en'] ? title['en'] : title['ua']} />
          <p>{description['en'] ? description['en'] : description['ua']}</p>
          <a href={link} target="_blank">
            {t('Read more')}
          </a>
          <p>{date}</p>
        </li>
      ))}
    </ul>
  );
};
