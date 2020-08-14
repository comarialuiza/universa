import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
`;

export const NormativeHoursContainer = styled.div`
    @media (min-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.8rem;
    }

    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1.8rem;
    }
`;

export const HoursSum = styled.p`
    margin-bottom: 30px;

    span {
        font-weight: 500;
    }
`;