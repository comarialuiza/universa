import styled from 'styled-components';

export const Container = styled.div``;

export const AvailableContainer = styled.div``;

export const SubjectsAvailable = styled.ul`
    list-style: none;

    max-height: 400px;
    max-width: 300px;
    overflow: scroll;
`;

export const AvailableTitle = styled.h3`
    color: var(--color-primary);
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
`;

export const SubjectAvailable = styled.li`
    background-color: var(--color-white);
    border-radius: 8px;
    padding: 12px;
    max-width: 280px;
    position: relative;

    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const SubjectTitle = styled.p`
    font-size: 16px;
    color: var(--color-primary);
    margin-bottom: 5px;
    max-width: 85%;
`;

export const SubjectTeacher = styled.p`
    font-size: 14px;
    color: var(--color-text-complement);
`;

export const SubjectHours = styled.p`
    margin: 0;
    color: var(--color-text-complement);
    font-size: 14px;
`;

export const SubjectCode = styled.span`
    position: absolute;
    top: 10px;
    right: -5px;
    padding: 2px 4px;
    background-color: var(--color-secondary);
    font-size: 13px;
    color: var(--color-title-in-primary);
    border-radius: 4px;
`;
