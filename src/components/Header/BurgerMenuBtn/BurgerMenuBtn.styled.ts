import styled from 'styled-components';

export const BurgerMenuBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;

    color: ${p => p.theme.colors.black5};
    background-color: rgba(0, 0, 0, 0);
    border: ${props => props.theme.borders.none};
    cursor: pointer;
    transition: color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    /* svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    } */

    :hover,
    :focus {
        color: ${p => p.theme.colors.blue};
        transform: scale(1.1);
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 1440px) {
        /* display: none; */
    }
`;