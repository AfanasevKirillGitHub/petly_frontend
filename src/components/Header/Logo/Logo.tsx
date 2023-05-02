import { NavLink } from 'react-router-dom';
import logo from '../../../helpers/photos/petly.png';
import * as SC from './Logo.styled';

interface IProps {
    toggleBurgerMenu: () => void;
}

export const Logo = ({ toggleBurgerMenu }: IProps) => {
    const closerMenuByLogo = () => {
        if (document.querySelector('#menu-container-for-mobile')?.classList.contains('is-open')) {
            toggleBurgerMenu();
        };

        if (document.querySelector('#menu-container-for-tablet')?.classList.contains('is-open')) {
            toggleBurgerMenu();
        };

        return;
    };

    return (
        <NavLink to="/" style ={{textDecoration: 'none'}}>
            <SC.Logo src = {logo} onClick={closerMenuByLogo} />
        </NavLink>
    );
};