import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { pages, authPages, userPage } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { useAuth } from '../../hooks/useAuth';
import * as SC from './Navigation.styled';

interface IProps {
  toggleBurgerMenu: () => void;
}

export const Navigation = ({ toggleBurgerMenu }: IProps) => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  
  const [isDesktop, setIsDesktop] = useState(false);

  const navigateByPublicPages = () => {
    if (window.innerWidth >= 1440) {
      return setIsDesktop(true);
    };

    return !isDesktop && closeBurgerMenu();
  };

  const closeBurgerMenu = () => {
    toggleBurgerMenu();
    document.body.style.overflow = '';
  };

  return (
    <SC.MenuContainer id="menu-container" data-menu>
      <SC.MainNav>
        <ChangeLngElem />

        <SC.NavListAuth>
          {!isLoggedIn ?
            authPages.map(({ href, name, id }) => (
              <SC.NavListItemAuth key={id}>
                <SC.LinkAuth to={href} onClick={navigateByPublicPages}> {t(`navigation.${name}`)}</SC.LinkAuth>
              </SC.NavListItemAuth>
            ))
            : userPage.map(({ href, name, id }) => (
              <SC.NavListItemAuth key={id}>
                <SC.LinkAcc to={href} onClick={navigateByPublicPages}> {t(`navigation.${name}`)}</SC.LinkAcc>
              </SC.NavListItemAuth>
            ))
          }
        </SC.NavListAuth>

        <SC.NavList>
          {pages.map(({ href, name, id }) => (
            <SC.NavListItem key={id}>
              <SC.Link to={href} onClick={navigateByPublicPages}> {t(`navigation.${name}`)}</SC.Link>
            </SC.NavListItem>
          ))}
        </SC.NavList>
      </SC.MainNav>
    </SC.MenuContainer>
  );
};
