import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
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
`;
