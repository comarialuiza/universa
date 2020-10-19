import styled from 'styled-components/macro';

export const Container = styled.div`
    
`;

export const SubjectsContainer = styled.div<{ type: string }>`
    @media (min-width: 481px) {
        display: ${props => props.type === 'performance' ? 'block' : 'grid'};
        grid-gap: ${props => props.type === 'performance' ? '' : '30px'};
        margin-bottom: ${props => props.type === 'performance' ? '' : '50px'};
    }

    @media (min-width: 1141px) {
        grid-template-columns: ${props => props.type === 'performance' ? '' : 'repeat(3, 1fr)'};
    }
    
    @media (max-width: 1140px) and (min-width: 481px) {
        grid-template-columns: ${props => props.type === 'performance' ? '' : 'repeat(2, 1fr)'};
    }

    @media (max-width: 480px) {
        display: block;
    }
`;

export const Title = styled.h4`
    color: var(--color-text-title);
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: 300;
    text-transform: uppercase;
`;