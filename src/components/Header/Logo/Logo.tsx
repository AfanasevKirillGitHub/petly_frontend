import * as SC from './Logo.styled';

interface IProps {
    toggleBurgerMenu: () => void;
}

export const Logo = ({ toggleBurgerMenu }: IProps) => {
    const closerMenuByLogo = () => {
        if (document.querySelector('#menu-container')?.classList.contains('is-open')) {
            toggleBurgerMenu();
        };

        if (document.querySelector('#menu-container-for-tablet')?.classList.contains('is-open')) {
            toggleBurgerMenu();
        };

        return;
    };

    return (
        <SC.LogoLink to="/" onClick={closerMenuByLogo}>
            pe
            <SC.LogoSpan>t</SC.LogoSpan>
            ly
        </SC.LogoLink>
    );
};
