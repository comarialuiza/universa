import styled from 'styled-components';

export const Container = styled.div<{ status: string }>`
    border-left: 5px solid ${ props => props.status === 'approved' ? 'var(--color-success)' : 'var(--color-error)' };
    padding: 30px 20px 20px;
    background-color: var(--color-box-base);
`;

export const Title = styled.h3`
    height: 46px;
    overflow: hidden;
    margin-bottom: 5px;
    font-size: 1.5rem;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-text-title);
`;