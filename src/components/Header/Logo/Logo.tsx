import { NavLink } from 'react-router-dom';
import logo from '../../../helpers/photos/petly.png';
import * as SC from './Logo.styled';

export const Logo = () => {
    return (
        <NavLink to="/" style ={{textDecoration: 'none'}}>
            <SC.Logo src = {logo} />
        </NavLink>
    );
};