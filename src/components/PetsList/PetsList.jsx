import { useFetchPetsQuery } from '../../redux/pets/petsOperations';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './PetsList.styled';

import { Loader } from '../Loader/Loader';
import { PetCard } from './PetCard';

export const PetsList = () => {
  const { lang, keyword } = useGetSearchParams();
  const { data, isFetching } = useFetchPetsQuery({ lang, keyword });

  console.log('data :>> ', data);

  return (
    <>
      {isFetching && <Loader />}

      <SC.PetList>
        {data?.map(({ _id, name, breed, birthday, photo, comments }) => (
          <li key={_id}>
            <PetCard data={{ name, breed, birthday, photo, comments }} />
          </li>
        ))}
      </SC.PetList>
    </>
  );
};
