import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
    position: fixed;
    z-index: 1;
    top: 72px;
    left: 0;
    width: 100%;

    background-color: ${props => props.theme.colors.background};
    padding: 16px 34px;

    &.is-open {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    max-width: 830px;
    width: 100%;
  }
`;

export const MenuContainerForTablet = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
    position: fixed;
    z-index: 1;
    top: 96px;
    left: 0;
    width: 100%;

    background-color: ${props => props.theme.colors.background};
    padding: 48px;

    &.is-open {
      display: flex;
      justify-content: center;
      height: 100vh;
    }
  }
`;

export const MainNav = styled.nav`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    max-width: 252px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const NavListAuth = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  list-style: none;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const NavListItemAuth = styled.li`
  display: inherit;

  @media screen and (min-width: 1280px) {
  }
`;

export const LinkAuth = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 8px 28px;
  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.orange};
  background-color: ${props => (props.to === '/login' ? '#F59256' : '#FFFFFF')};
  color: ${props => (props.to === '/login' ? '#FFFFFF' : '#111111')};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props =>
      props.to === '/login' ? '#FFFFFF' : '#F59256'};
    color: ${props => (props.to === '/login' ? '#111111' : '#FFFFFF')};
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 28px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const LinkAcc = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 10px 28px;
  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.orange};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  text-align: center;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const NavListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 80px;
    }

    :last-child {
      margin-left: auto;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.xxxl};
  line-height: ${props => props.theme.lineHeights.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.bxxl};
    line-height: ${props => props.theme.lineHeights.m};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;
