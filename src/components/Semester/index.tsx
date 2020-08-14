import React from 'react';

// import { Container } from './styles';

import Subject from '../Subject';

interface SubjectData {
    title: string;
    code: string;
    teacher: string;
    overallGrade: number;
    status: string;
}

interface Semester {
    semesterNumber: number;
    subjects: Array<Subject>;
}

interface Props {
    semester: Semester;
}

const Semester: React.FC<Props> = ({ semester }) => {
    return (
        <div>
            <p>Semestre: { semester.semesterNumber }</p>

            { semester.subjects.map((subject: SubjectData) => (
                <Subject subject={ subject } />
            )) }
        </div>
    );
}

export default Semester;