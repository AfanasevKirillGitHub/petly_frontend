import { NewsList } from './NewsList/NewsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';

export const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('News')}</h2>
      <SearchBar />
      <NewsList />
    </>
  );
};
