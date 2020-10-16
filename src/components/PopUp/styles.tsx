import styled from 'styled-components';

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    cursor: pointer;
`;

export const Container = styled.div`
    padding: 20px;
    background-color: var(--color-background);
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: auto;
`;