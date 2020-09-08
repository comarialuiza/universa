import React, { Fragment } from 'react';

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
                        <Fragment key={ semester.semesterNumber }>
                            { semester.subjects.map((subject: Subject) => (
                                <Row key={ subject.code }>
                                    <th>{ subject.title }</th>
                                    <th>{ subject.teacher }</th>
                                    <th style={{ color: subject.grade < 70 ? '#f1833b' : '#667acd' }}>{ subject.grade } / 100</th>
                                    <th style={{ color: subject.frequency < 75 ? '#f1833b' : '#667acd' }}>{ subject.frequency }%</th>
                                    <th>{ subject.grade > 70 ? 'Aprovado' : 'Em exame' } </th>
                                </Row>
                            )) }
                        </Fragment>
                    )) }
                </TableBody>
            </Table>
        </Container>
    );
}

export default Overview;