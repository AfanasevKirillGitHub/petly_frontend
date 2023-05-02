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

  const navigateByAuthPages = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      if (document.querySelector('#menu-container-for-tablet')?.classList.contains('is-open')) {
        toggleBurgerMenu();
        document.body.style.overflow = '';
      };

      return;
    };

    if (window.innerWidth >= 1280) {
      return setIsDesktop(true);
    };

    return !isDesktop && closeBurgerMenu();
  };

  const navigateByPublicPages = () => {
    if (window.innerWidth >= 1280) {
      return setIsDesktop(true);
    };

    return !isDesktop && closeBurgerMenu();
  };

  const closeBurgerMenu = () => {
    toggleBurgerMenu();
    document.body.style.overflow = '';
  };

  return (
    <SC.MenuContainer id="menu-container">
      <ChangeLngElem />

      <SC.MainNav>
        <SC.NavListAuth>
          {!isLoggedIn ?
            authPages.map(({ href, name, id }) => (
              <SC.NavListItemAuth key={id}>
                <SC.LinkAuth to={href} onClick={navigateByAuthPages}> {t(`navigation.${name}`)}</SC.LinkAuth>
              </SC.NavListItemAuth>
            ))
            : userPage.map(({ href, name, id }) => (
              <SC.NavListItemAuth key={id}>
                <SC.LinkAcc to={href} onClick={navigateByAuthPages}> {t(`navigation.${name}`)}</SC.LinkAcc>
              </SC.NavListItemAuth>
            ))
          }
        </SC.NavListAuth>

        <SC.MenuContainerForTablet id="menu-container-for-tablet">
          <SC.NavList>
            {pages.map(({ href, name, id }) => (
            <SC.NavListItem key={id}>
              <SC.Link to={href} onClick={navigateByPublicPages}> {t(`navigation.${name}`)}</SC.Link>
            </SC.NavListItem>
            ))}
          </SC.NavList>
        </SC.MenuContainerForTablet>
      </SC.MainNav>
    </SC.MenuContainer>
  );
};
