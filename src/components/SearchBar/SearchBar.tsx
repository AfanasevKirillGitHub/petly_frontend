import { ChangeEvent, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'ts-debounce';
import { GrFormSearch } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './SearchBar.styled';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { lang, keyword, setSearchParams } = useGetSearchParams();
  const [query, setQuery] = useState(keyword);

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      (value: string) => setSearchParams({ lang, key: value }),
      500
    );
  }, [setSearchParams, lang]);

  const handleFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;

    setQuery(value);
    handleSearchParamsChange(value.replace(/\\/g, '\\\\').trim());
  };

  const onClear = () => {
    setQuery('');
    setSearchParams({ query: '' });
  };

  return (
    <SC.Form>
      <SC.Input
        type="text"
        placeholder={t('Search')!}
        value={query}
        onChange={handleFilterChange}
      />
      {query?.length > 0 ? (
          <SC.Button type="button">
            <RxCross2 size={24}  onClick={onClear} />
          </SC.Button>
        ) : (
          <SC.Button type="button">
           <GrFormSearch size={24} />
          </SC.Button>
        )}
    </SC.Form>
  );
};
