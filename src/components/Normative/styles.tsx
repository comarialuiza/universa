import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-white);

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