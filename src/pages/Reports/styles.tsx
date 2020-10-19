import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Report = styled.button`
    border: 0;
    padding: 10px 12px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    font-size: 16px;
    margin-bottom: 20px;
    width: 200px;

    @media (max-width: 480px) {
        width: 100%;
    }
`;