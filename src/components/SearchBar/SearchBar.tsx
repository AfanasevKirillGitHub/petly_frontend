import { GrFormSearch } from 'react-icons/gr';

export const SearchBar = () => {
  return (
    <form>
      <input type="text" />
      <button type="submit">{<GrFormSearch size={24} />}</button>
    </form>
  );
};
