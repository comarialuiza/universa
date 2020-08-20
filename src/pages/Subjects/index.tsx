import React from 'react';

import Semester from '../../components/Semester';
import { Container, SemesterContainer } from './styles';
import Header from '../../components/Header';

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

interface Semesters {
    semester: Semester;
}

const Subjects: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <SemesterContainer>
                    { subjectsMock.map((semester: SemesterData) => (
                        <Semester semester={ semester } parent="subjects" />
                    )) }
                </SemesterContainer>
            </Container>
        </>
    );
}

export default Subjects;