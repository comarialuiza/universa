import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;

    overflow: scroll;
    max-height: 195px;
    margin-bottom: 0;
`;

export const Activity = styled.li`
    padding-left: 10px;
    border-left: 2px solid var(--color-primary);
    border-radius: 4px;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-bottom: 10px;
    }
`;

export const ActivityName = styled.p`
    color: var(--color-text-title);
    font-size: 15px;
    margin: 0 0 5px;
`;

export const ActivityDate = styled.p`
    color: var(--color-text-complement);
    font-size: 13px;
    margin: 0;
`;