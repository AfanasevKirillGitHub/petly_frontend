import { useTranslation } from 'react-i18next';
import { findPetNan, privateNav } from '../../helpers/pages';
import { useAuth } from '../../hooks/useAuth';
import * as SC from './FindPetNan.styled';

export const FindPetNan = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  return (
    <SC.Navigation>
      <SC.NavList>
        {findPetNan.map(({ id, href, name }) => (
          <SC.NavItem key={id}>
            <SC.Link to={href}> {t(`find-pet-nav.${name}`)} </SC.Link>
          </SC.NavItem>
        ))}
        {isLoggedIn &&
          privateNav.map(({ id, href, name }) => (
            <SC.NavItem key={id}>
              <SC.Link to={href}> {t(`find-pet-nav.${name}`)} </SC.Link>
            </SC.NavItem>
          ))}
      </SC.NavList>
    </SC.Navigation>
  );
};
