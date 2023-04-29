import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

import * as SC from './UserData.styled';

import defaultAvatar from '../../helpers/photos/default-avatar.png';

export const UserData = () => {
  const dispatch = useDispatch();

  return (
    <SC.Wrapper>
      <SC.TitleInfo>My information:</SC.TitleInfo>
      <SC.UserFrame>
        <SC.PhotoContainer>
          <SC.Photo src={defaultAvatar} />
          <SC.EditPhotoLink>Edit photo</SC.EditPhotoLink>
        </SC.PhotoContainer>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </SC.UserFrame>
    </SC.Wrapper>
  );
};
