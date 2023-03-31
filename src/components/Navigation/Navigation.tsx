import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { pages } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';

export const Navigation = () => {
  const { t } = useTranslation();
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
        </ul>
      </nav>
    </div>
  );
};
