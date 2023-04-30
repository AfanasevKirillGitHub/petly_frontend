import { ReactComponent as BurgerMenuClose } from './icons/burger-menu-close-btn.svg';
import { ReactComponent as BurgerMenuOpen } from './icons/burger-menu-open-btn.svg';

interface IIcons {
    [key: string]: React.ComponentType<any>;
}

export const SVG: IIcons = {
   BurgerMenuClose,
   BurgerMenuOpen,
};
