import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavListAuth = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavListItem = styled.li`
  :not(:last-child) {
    margin-right: 80px;
  }
  :last-child {
    margin-left: auto;
  }
`;

export const NavListItemAuth = styled.li`
   :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration:none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.l};
  color: ${props => props.theme.colors.black}; 
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent}; 
  }
`;

export const LinkAuth = styled(NavLink)`
  text-decoration:none;
  cursor: pointer;
  padding: 10px 28px;
  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.orange};
  background-color: ${props => (props.to === '/login' ? '#F59256' : '#FFFFFF')};
  color: ${props => (props.to === '/login' ? '#FFFFFF' : '#111111')};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.l};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => (props.to === '/login' ? '#FFFFFF' : '#F59256')};
    color:  ${props => (props.to === '/login' ? '#111111' : '#FFFFFF')};
  }
 
`;

export const LinkAcc = styled(NavLink)`
  text-decoration:none;
  cursor: pointer;
  padding: 10px 28px;
  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.orange};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.l};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color:${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
 
`;
