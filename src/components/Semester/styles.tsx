import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const SubjectsContainer = styled.div<{ type: string }>`
    display: ${props => props.type === 'performance' ? 'block' : 'grid'};
    grid-template-columns: ${props => props.type === 'performance' ? '' : 'repeat(3, 1fr)'};
    grid-gap: ${props => props.type === 'performance' ? '' : '30px'};
    margin-bottom: ${props => props.type === 'performance' ? '' : '30px'};
`;