import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
    background-color: var(--color-background);
    position: relative;
    width: 100%;
    max-width: 500px;
    border-radius: 20px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    color: var(--color-primary);
    font-weight: normal;
    text-align: center;
`;