import styled from 'styled-components/macro';

export const Container = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-white);
    border-left: 5px solid var(--color-primary);

    @media (max-width: 480px) {
        margin-bottom: 1.8rem;
    }
`;

export const Title = styled.h3`
    color: var(--color-text-title);
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
    height: 48px;
    overflow: hidden;
`;

export const Hours = styled.p`
    color: var(--color-text-complement);
    font-size: 15px;
`;

export const Button = styled.button`
    font-size: 14px;
    border-radius: 4px;
    padding: 4px 15px;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    background-color: var(--color-white);
`;