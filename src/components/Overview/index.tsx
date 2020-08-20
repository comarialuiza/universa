import React from 'react';

import { Container, Table } from './styles';

import subjectsMock from '../../utils/subjectsMockData';

interface Subject {
    title: string;
    code: string;
    teacher: string;
    hours: number;
    grade: number;
    frequency: number;
    status: string;
}

interface SemesterData {
    semesterNumber: number;
    active: boolean;
    subjects: Array<Subject>;
}

const Overview: React.FC = () => {
    return (
        <Container>

        </Container>
    );
}

export default Overview;