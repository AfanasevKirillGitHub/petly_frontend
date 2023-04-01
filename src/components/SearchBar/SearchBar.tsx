import { ChangeEvent, useState, useMemo } from 'react';
import { debounce } from 'ts-debounce';
import { GrFormSearch } from 'react-icons/gr';
import { useGetSearchParams } from '../../huks/useGetSearchParams';

export const SearchBar = () => {
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
    handleSearchParamsChange(value);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleFilterChange} />
      <div>{<GrFormSearch size={24} />}</div>
    </>
  );
};
