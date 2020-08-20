import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const SubjectsContainer = styled.div<{ type: string }>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
`;