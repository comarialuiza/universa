import styled from 'styled-components';

export const Container = styled.div<{ status: string }>`
    border-left: 5px solid ${ props => props.status === 'approved' ? 'var(--color-success)' : 'var(--color-error)' };
    padding: 30px 20px 20px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export const Title = styled.div`
    height: 46px;
    overflow: hidden;
    margin-bottom: 5px;
    font-size: 1.5rem;
    font-weight: 500;
`;