// import { useTranslation } from 'react-i18next';
// import { useGetSearchParams } from '../../huks/useGetSearchParams';
// import { useFetchServicesQuery } from '../../redux/services/servicesOperations';
import { Loader } from '../../components/Loader/Loader';
import * as SC from './FriendsList.styled';

export const FriendsList = () => {
  // const { t } = useTranslation();
  // const { lang } = useGetSearchParams();
  // const { data, isFetching } = useFetchServicesQuery(
  //   { lang },
  //   {
  //     refetchOnMountOrArgChange: true,
  //   }
  // );

  return (
    <>
      {isFetching && <Loader />}
      <SC.FriendsList>
      </SC.FriendsList>
    </>
  );
};
