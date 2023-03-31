import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import US from '../../helpers/photos/us.png';
import * as SC from './ChangeLngElem.styled';

export const ChangeLngElem = () => {
  const { i18n } = useTranslation();

  const onchangeLngClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.currentTarget;
    i18n.changeLanguage(name);
  };

  return (
    <SC.Wrap>
      <SC.Btn type="button" onClick={onchangeLngClick} name="us">
        <img src={US} alt="usa flag" style={{ width: '20px' }} />
      </SC.Btn>
      <span>/</span>
      <SC.Btn type="button" onClick={onchangeLngClick} name="ua">
        💛💙
      </SC.Btn>
    </SC.Wrap>
  );
};
