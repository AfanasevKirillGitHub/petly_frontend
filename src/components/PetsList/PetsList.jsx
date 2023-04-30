import { useFetchPetsQuery } from '../../redux/pets/petsOperations';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './PetsList.styled';

import { Loader } from '../Loader/Loader';
import { PetCard } from './PetCard';

export const PetsList = () => {
  const { lang, keyword } = useGetSearchParams();
  const { data, isFetching } = useFetchPetsQuery({ lang, keyword });

  return (
    <>
      {isFetching && <Loader />}

      <SC.PetList>
        {data?.map(({ _id, name, breed, birthday, photo, comments }) => (
          <SC.PetListItem key={_id}>
            <PetCard data={{ _id, name, breed, birthday, photo, comments }} />
          </SC.PetListItem>
        ))}
      </SC.PetList>
    </>
  );
};
