import styled from 'styled-components';

export const Container = styled.div<{ status: string }>`
    /* border-left: 5px solid ${ props => props.status === 'approved' ? 'var(--color-success)' : 'var(--color-error)' }; */
    border-left: 5px solid var(--color-primary);
    border-radius: 8px;
    padding: 30px 20px 20px;
    background-color: var(--color-white);
    position: relative;
`;

export const Title = styled.h3`
    height: 46px;
    overflow: hidden;
    margin-bottom: 8px;
    font-size: 1.5rem;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-text-title);
`;

export const Teacher = styled.p`
    color: var(--color-text-complement);
    font-size: 15px;
`;

export const CodeFlag = styled.span`
    position: absolute;
    top: 10px;
    right: -5px;
    padding: 2px 4px;
    background-color: var(--color-secondary);
    font-size: 13px;
    color: var(--color-title-in-primary);
    border-radius: 4px;
`;