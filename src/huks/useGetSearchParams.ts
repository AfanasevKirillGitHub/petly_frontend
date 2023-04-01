import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const lang = serchParams.get('lang') ?? 'en';
  const keyword = serchParams.get('key') ?? '';
  return { lang, keyword, setSearchParams };
};
