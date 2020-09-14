import styled from 'styled-components';

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 20px;
    background-color: var(--color-background);
`;