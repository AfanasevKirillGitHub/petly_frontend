import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') ?? 'en';
  const keyword = searchParams.get('key') ?? '';
  return { lang, keyword, setSearchParams };
};
