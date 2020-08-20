import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const SubjectsContainer = styled.div<{ type: string }>`
    display: ${props => props.type === 'subjects' ? 'grid' : 'block'};
    grid-template-columns: ${props => props.type === 'subjects' ? 'repeat(3, 1fr)' : ''};
    grid-gap: ${props => props.type === 'subjects' ? '30px' : ''};
    margin: 10px 0 60px;
`;