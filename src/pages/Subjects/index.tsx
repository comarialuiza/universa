import React from 'react';

import Semester from '../../components/Semester';
import { Container, SubjectsContainer } from './styles';

import subjectsMock from './subjectsMockData';

interface Subject {
    title: string;
    code: string;
    teacher: string;
    overallGrade: number;
    status: string;
}

interface SemesterData {
    semesterNumber: number;
    subjects: Array<Subject>;
}

interface Semesters {
    semester: Semester;
}

const Subjects: React.FC = () => {
    return (
        <Container>
            <SubjectsContainer>
                { subjectsMock.map((semester: SemesterData) => (
                    <Semester semester={ semester }/>
                )) }
            </SubjectsContainer>
        </Container>
    );
}

export default Subjects;