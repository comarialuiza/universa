import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const SubjectsContainer = styled.div<{ type: string }>`
    display: ${props => props.type === 'performance' ? 'block' : 'grid'};
    grid-template-columns: ${props => props.type === 'performance' ? '' : 'repeat(3, 1fr)'};
    grid-gap: ${props => props.type === 'performance' ? '' : '30px'};
    margin-bottom: ${props => props.type === 'performance' ? '' : '50px'};
`;

export const Title = styled.h4`
    color: var(--color-text-title);
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: 300;
    text-transform: uppercase;
`;