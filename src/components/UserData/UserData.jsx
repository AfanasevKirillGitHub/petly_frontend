import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { updateInfo } from '../../redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../redux/auth/authOperations';
import defaultAvatar from '../../helpers/photos/default-avatar.png';
import editPhotoIcon from '../../helpers/photos/editPhotoIcon.png';
import logoutIcon from '../../helpers/photos/logout-icon.png';
import * as SC from './UserData.styled';
import UserDataItem from '../UserDataItem/UserDataItem';

const fileTypes = ['png', 'jpg', 'jpeg', 'webp'];

export const UserData = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const { email, name, birthday, phone, city, avatarURL } = user;

  const handleFileChange = async event => {
    const currentFileType = event.target.value.split('.');
    const fileType = currentFileType[currentFileType.length - 1];

    if (!fileTypes.includes(fileType)) {
      toast.error('Only extencions png, jpg, jpeg, webp allowed!', {
        autoClose: 3000,
      });
      return;
    }

    const imageFile = event.target.files[0];

    if (imageFile) {
      const formData = new FormData();
      formData.append('avatarURL', imageFile);
      await dispatch(updateInfo(formData));
    }
  };

  return (
    <SC.Wrapper>
      <SC.TitleInfo>My information:</SC.TitleInfo>
      <SC.UserFrame>
        <SC.PhotoContainer>
          <SC.PhotoWrapper>
            <SC.Photo
              alt="avatar"
              src={
                avatarURL === null ||
                avatarURL === undefined ||
                avatarURL === ''
                  ? defaultAvatar
                  : avatarURL
              }
            />
          </SC.PhotoWrapper>
          <SC.InputWrapper>
            <SC.InputFile
              id="avatarURL"
              name="avatarURL"
              type="file"
              onChange={handleFileChange}
            />
            <SC.EditPhotoButton>
              <SC.EditPhotoIcon src={editPhotoIcon} alt="Edit avatar icon" />
              <SC.EditPhotoText>Edit photo</SC.EditPhotoText>
            </SC.EditPhotoButton>
          </SC.InputWrapper>
        </SC.PhotoContainer>

        <SC.UserItemWrapper>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="name"
            initValue={{ name }}
            setUser={async data => {
              if (data.name === name) {
                return;
              }
              await dispatch(updateInfo(data));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="email"
            initValue={{ email }}
            setUser={async data => {
              if (data.email === email) {
                return;
              }
              await dispatch(updateInfo(data));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="birthday"
            initValue={{
              birthday:
                !birthday || birthday === '00.00.0000'
                  ? '00.00.0000'
                  : getBirthdayString(birthday),
            }}
            setUser={async data => {
              if (data.birthday === birthday) {
                return;
              }
              await dispatch(updateInfo(data));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="phone"
            initValue={{ phone }}
            setUser={async data => {
              if (data.phone === phone) {
                return;
              }
              await dispatch(updateInfo(data));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="city"
            initValue={{
              city: !city ? '' : city,
            }}
            setUser={async data => {
              if (data.city === city) {
                return;
              }
              await dispatch(updateInfo(data));
            }}
          ></UserDataItem>
          <SC.LogoutButton
            onClick={async () => {
              await dispatch(logOut());
              document.location.reload();
            }}
          >
            <SC.LogoutIcon alt="logout user" src={logoutIcon} /> Log Out
          </SC.LogoutButton>
        </SC.UserItemWrapper>
      </SC.UserFrame>
    </SC.Wrapper>
  );
};

function getBirthdayString(birthday) {
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()}`;
}

// export const UserData = () => {
//   const { t } = useTranslation();
//   const { user } = useAuth();
//   const dispatch = useDispatch();
//   const [picture, setPicture] = useState('');
//   const [selectPicture, setSelectPicture] = useState('');
//   const [active, setActive] = useState(true);

//   const boolButton = e => {
//     e.preventDefault();

//     if (active === true) {
//       setActive(false);
//       return;
//     }

//     setActive(true);
//   };

//   const handleChange = e => {
//     const reader = new FileReader();

//     if (e.target.size < e.target.files[0].size) {
//       alert('user.sizePhoto');
//       return;
//     }

//     if (e.target.files[0]) {
//       reader.readAsDataURL(e.target.files[0]);
//       reader.onloadend = () => {
//         const base64data = reader.result;
//         setSelectPicture(base64data);
//       };
//     }

//     const formData = new FormData();
//     formData.append('avatar', e.target.files[0]);
//     const data = {
//       id: user.id,
//       value: formData,
//     };
//     dispatch(updateInfo({ data }));
//   };

//   const updateUser = value => {
//     const data = {
//       id: user.id,
//       value,
//     };
//     dispatch(updateInfo({ data }));
//   };

//   return (
//     <SC.Wrapper>
//       <SC.TitleInfo>My information:</SC.TitleInfo>
//       <SC.UserFrame>
//         <SC.UserForm>
//           <SC.FieldWrapper>
//             <SC.FieldLabel>
//               <SC.FieldFileInput
//                 type="file"
//                 name="file"
//                 accept=".jpg, .jpeg, .png"
//                 size={1000000}
//                 required
//                 multiple
//                 onChange={handleChange}
//                 disabled={active}
//               />

//               <SC.FieldFake>
//                 {picture || selectPicture ? (
//                   <SC.Photo
//                     src={picture && !selectPicture ? picture : defaultAvatar}
//                     alt="avatar"
//                     onError={e => {
//                       e.target.src = defaultAvatar;
//                     }}
//                   />
//                 ) : active ? (
//                   t('user.uploadPhoto')
//                 ) : (
//                   t('user.choisePhoto')
//                 )}
//               </SC.FieldFake>
//               {(picture || selectPicture) && !active && (
//                 <SC.AnyChoisePhoto>{t('user.choisePhoto')}</SC.AnyChoisePhoto>
//               )}
//             </SC.FieldLabel>
//             <SC.EditPhotoButton onClick={boolButton}>
//               {active ? (
//                 <>
//                   <SC.EditPhotoIcon
//                     src={editPhotoIcon}
//                     alt="Edit avatar icon"
//                   />
//                   {t('user.editPhoto')}
//                 </>
//               ) : (
//                 <SC.EditPhotoIconDone
//                   src={editPhotoIconDone}
//                   alt="Done edit avatar icon"
//                 />
//               )}
//             </SC.EditPhotoButton>
//           </SC.FieldWrapper>

//           <ul className={styles.list}>
//             <UserDataItem
//               updateUser={updateUser}
//               title={t('Name')}
//               pattern={
//                 /^[a-zA-Zа-яА-ЯА-ЯЁёЇїІіЄєҐґ]+(([' -][a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ ])?[a-zA-Zа-яА-ЯЁёЇїІіЄєҐґ]*)*$/
//               }
//               type={'text'}
//               name={'name'}
//               placeholder={'Name'}
//               min={2}
//               max={16}
//               required={true}
//               example={'Anna Lokerman'}
//               defaultVaule={user?.name}
//             />
//             <UserDataItem
//               updateUser={updateUser}
//               title={t('Email')}
//               pattern={
//                 /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
//               }
//               type={'email'}
//               name={'email'}
//               placeholder={'Your email'}
//               example={'example@gmail.com'}
//               defaultVaule={user?.email}
//               required={true}
//             />
//             <UserDataItem
//               updateUser={updateUser}
//               title={t('user.birthday')}
//               pattern={
//                 /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/
//               }
//               type={'text'}
//               name={'dateOfBirth'}
//               placeholder={'Your birthday'}
//               example={'DD.MM.YYYY'}
//               mask={'99.99.9999'}
//               defaultVaule={user?.dateOfBirth}
//             />
//             <UserDataItem
//               updateUser={updateUser}
//               title={t('Phone')}
//               pattern={/^[+]{0,1}380([0-9]{9})$/}
//               type={'phone'}
//               name={'phone'}
//               placeholder={'Your phone'}
//               example={'+38000000000'}
//               mask={'+380999999999'}
//               defaultVaule={user?.phone}
//               required={true}
//             />
//             <UserDataItem
//               updateUser={updateUser}
//               title={t('user.city')}
//               type={'text'}
//               name={'location'}
//               placeholder={'Your city'}
//               example={'Kyiv'}
//               min={2}
//               max={48}
//               defaultVaule={user?.location}
//             />
//           </ul>
//         </SC.UserForm>

//         <button type="button" onClick={() => dispatch(logOut())}>
//           Log Out
//         </button>
//       </SC.UserFrame>
//     </SC.Wrapper>
//   );
// };
