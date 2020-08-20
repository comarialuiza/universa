import styled from 'styled-components';

export const Container = styled.div``;

export const ReportsContainer = styled.div`
`;

export const Report = styled.button`
    border: 0;
    padding: 10px 12px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    display: block;
    font-size: 16px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
        width: 100%;
    }
`;