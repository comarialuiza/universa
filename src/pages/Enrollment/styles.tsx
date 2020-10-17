import styled from 'styled-components';

export const Container = styled.div``;

export const AvailableContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const SubjectsContainer = styled.div`
    width: 48%;
`;

export const SubjectsList = styled.ul`
    list-style: none;
    max-height: 400px;
    
    overflow: scroll;
`;

export const Title = styled.h3`
    color: var(--color-primary);
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    color: var(--color-text-complement);
    font-size: 15px;
    line-height: 22px;
    text-align: justify;
`;

export const SubjectAvailable = styled.li`
    background-color: var(--color-white);
    border-radius: 8px;
    padding: 12px;
    width: calc(100% - 18px);
    position: relative;
    cursor: pointer;

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