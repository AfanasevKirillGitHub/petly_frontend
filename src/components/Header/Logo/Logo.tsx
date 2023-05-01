import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../helpers/photos/petly.png';
import * as SC from './Logo.styled';

interface IProps {
    toggleBurgerMenu: () => void;
}

export const Logo = ({ toggleBurgerMenu }: IProps) => {
    const [isDesktop, setIsDesktop] = useState(false);

    const navigateByLogo = () => {
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
        <NavLink to="/" style ={{textDecoration: 'none'}}>
            <SC.Logo src = {logo} onClick={navigateByLogo}/>
        </NavLink>
    );
};