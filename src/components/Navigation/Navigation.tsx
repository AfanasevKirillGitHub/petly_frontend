import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { pages, authPages, accountPage } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { useAuth } from '../../huks/useAuth';

export const Navigation = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <ChangeLngElem />
      <nav>
        <ul>
          {pages.map(({ href, name, id }) => (
            <li key={id}>
              <Link to={href}> {t(`navigation.${name}`)}</Link>
            </li>
          ))}
          {!isLoggedIn
            ? authPages.map(({ href, name, id }) => (
                <li key={id}>
                  <Link to={href}> {t(`navigation.${name}`)}</Link>
                </li>
              ))
            : accountPage.map(({ href, name, id }) => (
                <li key={id}>
                  <Link to={href}> {t(`navigation.${name}`)}</Link>
                </li>
              ))}
        </ul>
      </nav>
    </div>
  );
};
