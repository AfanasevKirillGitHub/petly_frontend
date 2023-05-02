import styled from 'styled-components';

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;

    @media screen and (min-width: 768px) {
        padding: 24px 32px;
    };

    @media screen and (min-width: 1280px) {
        padding: 20px 16px;
    };
`;
