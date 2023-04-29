import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

import { pages, authPages, userPage } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { useAuth } from '../../hooks/useAuth';
import * as SC from './Navigation.styled';
import logo from '../../helpers/photos/petly.png';

export const Navigation = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <SC.MainNav>
        <SC.NavList>
        <NavLink to="/" style ={{textDecoration: 'none'}}>
          <SC.Logo src = {logo}/>
        </NavLink>
          {pages.map(({ href, name, id }) => (
            <SC.NavListItem key={id}>
              <SC.Link to={href}> {t(`navigation.${name}`)}</SC.Link>
            </SC.NavListItem>
          ))}
          </SC.NavList>
          <SC.NavListAuth>
          {!isLoggedIn
            ? authPages.map(({ href, name, id }) => (
                <SC.NavListItemAuth key={id}>
                  <SC.LinkAuth to={href}> {t(`navigation.${name}`)}</SC.LinkAuth>
                </SC.NavListItemAuth>
              ))
            : userPage.map(({ href, name, id }) => (
                <SC.NavListItemAuth key={id}>
                  <SC.LinkAcc to={href}> {t(`navigation.${name}`)}</SC.LinkAcc>
                </SC.NavListItemAuth>
              ))}
              <ChangeLngElem />
            </SC.NavListAuth>
      </SC.MainNav>
    </div>
  );
};
