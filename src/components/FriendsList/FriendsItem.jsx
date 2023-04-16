import { useTranslation } from 'react-i18next';
import defaultImage from '../../helpers/photos/noImage.JPG';
import * as SC from './FriendsList.styled';

export const FriendsItem = ({
  _id,
  title,
  url,
  addressUrl,
  imageUrl,
  address,
//   workDays,
  phone,
  email,
}) => {

  const { t } = useTranslation();
  return (
    <SC.FriendItem key={_id}>
      <SC.FriendNameLink href={url} target="_blank" rel="noopener noreferrer">
        <SC.FriendName> {title}</SC.FriendName>
      </SC.FriendNameLink>

      <SC.FriendCard>
        <SC.FriendImage src={imageUrl ?? defaultImage} alt="logo our friends" />

        <SC.FriendDataList>
          <SC.FriendDataItem>
            <SC.TextTime>{t('Time')}:</SC.TextTime>
          </SC.FriendDataItem>

          <SC.FriendDataItem>
            <SC.Text>{t('Address')}:</SC.Text>
            {address ? (
              <SC.FriendDataLink
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </SC.FriendDataLink>
            ) : (
              <SC.Text>-------------</SC.Text>
            )}
          </SC.FriendDataItem>

          <SC.FriendDataItem>
            <SC.Text>{t('Email')}:</SC.Text>
            {email ? (
              <SC.FriendDataLink
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </SC.FriendDataLink>
            ) : (
              <SC.Text>-------------</SC.Text>
            )}
          </SC.FriendDataItem>

          <SC.FriendDataItem>
            <SC.Text>{t('Phone')}:</SC.Text>
            {phone ? (
              <SC.FriendDataLink
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phone}
              </SC.FriendDataLink>
            ) : (
              <SC.Text>-------------</SC.Text>
            )}
          </SC.FriendDataItem>
        </SC.FriendDataList>
      </SC.FriendCard>
    </SC.FriendItem>
  );
};


