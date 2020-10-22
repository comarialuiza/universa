import styled from 'styled-components/macro';
import { Table, TableHeader as TableHead } from '../../styles/global';

export const TableContainer = styled(Table)`
    @media (min-width: 481px) {
        width: 48%;
    }


    @media (max-width: 480px) {
        width: 100%;
        margin-top: 18px;
    }
`;

export const TableHeader = styled(TableHead)`
    th {
        font-weight: 300;
        color: var(--color-tertiary);
    }
`;

export const Container = styled.div`
`;

export const FlexContainer = styled.div`
    @media (min-width: 1141px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const AvailableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
`;

export const SubjectsContainer = styled.div`
    @media (min-width: 1141px) {
        width: 48%;
    }

    @media (max-width: 1140px) {
        width: 100%;
        
        &:first-of-type {
            margin-bottom: 50px;
        }
    }
`;

export const SubjectsList = styled.ul`
    list-style: none;
    height: 450px;
    
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
    border-left: 5px solid var(--color-primary);

    @media (min-width: 481px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

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

export const SubjectStatus = styled.p`
    margin: 12px 0 0;
    color: var(--color-secondary);
    font-size: 14px;
`;

export const SubjectData = styled.div`
    @media (min-width: 481px) {
        width: 48%;
    }


    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const NoSubjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    
    svg {
        font-size: 60px;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        text-align: center;
        color: var(--color-tertiary);
    }

    p {
        color: var(--color-text-complement);
        text-align: center;
        font-size: 16px;
        line-height: 24px;

        @media (min-width: 481px) {
            width: 280px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Button = styled.button<{ bg: string }>`
    border: 0;
    display: block;
    padding: 8px 12px;
    border-radius: 4px;
    border: 2px solid var(--color-primary);
    color: ${({ bg }) => bg === 'cancel' ? 'var(--color-primary)' : 'var(--color-white)'};
    background: ${({ bg }) => bg === 'cancel' ? 'var(--color-white)' : 'var(--color-primary)'};

    &:first-of-type {
        margin-right: 20px;
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`;

export const ActionButton = styled.button`
    height: 25px;
    width: 25px;
    display: block;
    background-color: var(--color-primary);
    border-radius: 3px;
    position: absolute;
    bottom: -5px;
    right: -5px;
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        color: var(--color-white);
    }
`;