import styled from 'styled-components';

export const BurgerMenuBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;

    background-color: rgba(0, 0, 0, 0);
    border: ${props => props.theme.borders.none};
    cursor: pointer;
    transition: color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg#openBurgerMenuBtn{
        fill: ${props => props.theme.colors.black};
    }

    svg#closeBurgerMenuBtn{
        stroke: ${props => props.theme.colors.black};
    }

    svg#openBurgerMenuBtn:hover,
    svg#openBurgerMenuBtn:hover {
        fill: ${props => props.theme.colors.accent};
    }

    svg#closeBurgerMenuBtn:hover,
    svg#closeBurgerMenuBtn:hover {
        stroke: ${props => props.theme.colors.accent};
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        
    }

    @media screen and (min-width: 1280px) {
        display: none;
    }
`;
