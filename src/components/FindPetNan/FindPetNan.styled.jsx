import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;

`;

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }

`;

export const Link = styled(NavLink)`
  text-decoration:none;
  cursor: pointer;
  padding: 10px 28px;
  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.orange};
  background-color: ${props => props.theme.colors.white}; 
  color: ${props => props.theme.colors.mainText}; 
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.l};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent}; 
    color: ${props => props.theme.colors.white}; 
  }
`