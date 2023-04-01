import { useFetchNewsQuery } from '../../../redux/news/newsOperations';

export const NewsList = () => {
  const { data } = useFetchNewsQuery({ lang: 'en', keyWord: '' });

  return (
    <ul>
      {data?.map(({ title, date, description, link, _id, img }) => (
        <li key={_id}>
          <h3>{title['en'] ? title['en'] : title['ua']}</h3>
          <img src={img} alt={title['en'] ? title['en'] : title['ua']} />
          <p>{description['en'] ? description['en'] : description['ua']}</p>
          <p>{link}</p>
          <p>{date}</p>
        </li>
      ))}
    </ul>
  );
};
