import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fontFamily.logo};
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.xl};
    font-weight: ${props => props.theme.fontWeights.bold};
    letter-spacing: 0.07em;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.xxxl};
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        margin-right: auto;
    }
`;

export const LogoSpan = styled.span`
    color: ${props => props.theme.colors.accent};
`;
