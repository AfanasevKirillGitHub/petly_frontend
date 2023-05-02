import { useState, useEffect } from 'react';
import { Logo } from './Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { BurgerMenuBtn } from './BurgerMenuBtn/BurgerMenuBtn';
import * as SC from './Header.styled';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    }, [isMenuOpen]);

    const handleBurgerMenu = () => {
        const mobileMenu = document.querySelector('#menu-container') as HTMLElement;
        mobileMenu.classList.toggle('is-open');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <SC.MainHeader>
            <Logo toggleBurgerMenu={handleBurgerMenu}/>
            <Navigation toggleBurgerMenu={handleBurgerMenu}/>
            <BurgerMenuBtn toggleBurgerMenu={handleBurgerMenu} isMenuOpen={isMenuOpen}/>
        </SC.MainHeader>
    );
};
