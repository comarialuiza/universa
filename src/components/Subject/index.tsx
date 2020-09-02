import React from 'react';
import { Statistic, Progress } from 'antd';

import { Container, Title, CodeFlag, Teacher, StatisticContainer, GradeContainer, InfoContainer, Info } from './styles';
import { Table, TableHeader, TableBody, Row } from '../../styles/global';

interface GradeProvider {
    id: number;
    title: string;
    grade: number;
}  
interface Subject {
    title: string;
    code: string;
    teacher: string;
    hours: number;
    grade: number;
    frequency: number;
    status: string;
    gradeProvider?: Array<GradeProvider>;
}

interface Props {
    subject: Subject;
    parent: string;
}

const Subject: React.FC<Props> = ({ subject, parent }) => {
    return (
        <Container type={ parent }>
            <Title>
                { subject.title }
            </Title>
            <Teacher>Professor(a): { subject.teacher }</Teacher>

            <CodeFlag>{ subject.code }</CodeFlag>

            { parent === 'subjects' ? (
                <StatisticContainer>
                    <Statistic title="Nota" value={ subject.grade } suffix="/ 100" />
                    <Statistic title="Frequência" value={ subject.frequency } suffix="/ 100" />
                </StatisticContainer>
            ) : (
                <>
                    <Info>
                        <GradeContainer>
                            { subject.gradeProvider && (
                                <Table>
                                    <TableHeader>
                                        <tr>
                                            <th>Trabalho/prova</th>
                                            <th>Nota</th>
                                        </tr>
                                    </TableHeader>
                                    <TableBody>
                                        { subject.gradeProvider && subject.gradeProvider.map((gradeData: GradeProvider) => (
                                            <Row key={ gradeData.id }>
                                                <th style={{ width: '230px' }}>
                                                    { gradeData.title }
                                                </th>
                                                <th>
                                                    <Progress percent={gradeData.grade} size="small" />
                                                </th>
                                            </Row>
                                        )) }
                                    </TableBody>
                                </Table>
                            ) }
                        </GradeContainer>
                        <InfoContainer></InfoContainer>
                    </Info>
                </>
            ) }
        </Container>
    );
}

export default Subject;