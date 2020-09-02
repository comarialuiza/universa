import React from 'react';

import { Container } from './styles';
import { Table, TableHeader, TableBody, Row } from '../../styles/global';

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
            <Table>
                <TableHeader>
                    <tr>
                        <th>Disciplina</th>
                        <th>Professor(a)</th>
                        <th>Média atual</th>
                        <th>Frequência</th>
                        <th>Status</th>
                    </tr>
                </TableHeader>
                <TableBody>
                    { subjectsMock.filter(status => status.active === true).map((semester: SemesterData) => (
                        <>
                            { semester.subjects.map((subject: Subject) => (
                                <Row>
                                    <th>{ subject.title }</th>
                                    <th>{ subject.teacher }</th>
                                    <th>{ subject.grade } / 100</th>
                                    <th>{ subject.frequency } %</th>
                                    <th>{ subject.status === 'approved' ? 'Aprovado' : 'Em exame' } </th>
                                </Row>
                            )) }
                        </>
                    )) }
                </TableBody>
            </Table>
        </Container>
    );
}

export default Overview;