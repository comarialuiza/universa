import styled from 'styled-components';


export const Container = styled.div`
    .day-header {
        color: var(--color-primary);
        font-weight: 300;
    }

    .month-title {
        color: var(--color-primary);
    }

    .year-title {
        color: var(--color-primary);
    }
`;

export const Button = styled.button`
    background-color: var(--color-secondary);
    border-radius: 8px;
    color: var(--color-input-background);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 15px;
    border: 0;
`;

export const ButtonContainer = styled.div`
    margin-bottom: 20px;

    > ${ Button }:first-of-type {
        margin-right: 20px;
    }
`;