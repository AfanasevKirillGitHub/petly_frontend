import styled from 'styled-components';

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 16px 20px;

    @media screen and (min-width: 320px) {
        /* width: 320px; */
    };

    @media screen and (min-width: 768px) {
        /* width: 580px;
        padding-bottom: 170px; */
    };

    @media screen and (min-width: 1280px) {
        /* width: 1184px;
        padding-bottom: 188px; */
    };
`;