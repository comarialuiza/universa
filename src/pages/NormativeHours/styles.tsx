import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
    padding: 40px;
`;

export const SubmitButton = styled(Button)`
    background-color: var(--color-secondary);
    border: var(--color-secondary);
    border-radius: 8px;
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
        grid-gap: 1.8rem;
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