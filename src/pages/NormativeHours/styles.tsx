import styled from 'styled-components/macro';

export const Container = styled.div`
`;

export const SubmitButton = styled.button`
    background-color: var(--color-secondary);
    border-radius: 8px;
    color: var(--color-input-background);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 15px;
    border: 0;
`;

export const NormativeHoursContainer = styled.div`
    @media (min-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.8rem;
    }

    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }
`;

export const HoursSum = styled.p`
    font-size: 16px;

    span {
        font-weight: 500;
        color: var(--color-primary);
        font-size: 20px;
    }
`;

export const NormativeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;