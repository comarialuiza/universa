import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

export const Title = styled.h3``;

export const SubContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-white);
`;