import { SVG } from '../../../images';
import * as SC from './BurgerMenuBtn.styled';

interface IProps {
    toggleBurgerMenu: () => void;
    isMenuOpen: boolean;
}

export const BurgerMenuBtn = ({ toggleBurgerMenu, isMenuOpen }: IProps) => {
    return (
        <SC.BurgerMenuBtn type="button" onClick={toggleBurgerMenu}>
            {isMenuOpen ? <SVG.BurgerMenuClose /> : <SVG.BurgerMenuOpen />}
        </SC.BurgerMenuBtn>
    );
};