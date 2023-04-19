// import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import * as SC from './Header.styled';

export const Header = () => {
    // const { t } = useTranslation();

    return (
        <SC.AppHeader>
            <Logo />
            <Navigation />
            <button type='button'>Burger-menu</button>
        </SC.AppHeader>
    );
};