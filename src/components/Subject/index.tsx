import React from 'react';
import { Statistic, Row, Col } from 'antd';

import { Container, Title, CodeFlag, Teacher, Grade, GradeContainer } from './styles';

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
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Nota" value={ subject.grade } suffix="/ 100" />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Frequência" value={ subject.frequency } suffix="/ 100" />
                    </Col>
                </Row>
            ) : (
                <div>
                    <Grade>
                        <span>Trabalho/prova</span>
                        <span>Nota</span>
                    </Grade>
                    <GradeContainer>
                        { subject.gradeProvider && subject.gradeProvider.map((gradeData: GradeProvider) => (
                            <Grade key={ gradeData.id }>
                                <span>{ gradeData.title }</span>
                                <span>{ gradeData.grade }</span>
                            </Grade>
                        )) }
                    </GradeContainer>
                </div>
            ) }

            
        </Container>
    );
}

export default Subject;