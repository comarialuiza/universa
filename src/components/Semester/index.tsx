import React from 'react';

import { Container, SubjectsContainer } from './styles';

import Subject from '../Subject';

interface SubjectData {
    title: string;
    code: string;
    teacher: string;
    hours: number;
    grade: number;
    frequency: number;
    status: string;
}

interface Semester {
    semesterNumber: number;
    subjects: Array<Subject>;
}

interface Props {
    semester: Semester;
    parent: string;
}

const Semester: React.FC<Props> = ({ semester, parent }) => {
    return (
        <Container>
            <p>Semestre: { semester.semesterNumber }</p>

            <SubjectsContainer type={ parent }>
                { semester.subjects.map((subject: SubjectData) => (
                    <Subject subject={ subject } parent={ parent }/>
                )) }
            </SubjectsContainer>
        </Container>
    );
}

export default Semester;