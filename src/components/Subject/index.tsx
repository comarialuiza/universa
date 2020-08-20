import React from 'react';
import { Statistic, Row, Col } from 'antd';

import { Container, Title, CodeFlag, Teacher } from './styles';

interface Subject {
    title: string;
    code: string;
    teacher: string;
    hours: number;
    grade: number;
    frequency: number;
    status: string;
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
                <p>Performance parents</p>
            ) }

            
        </Container>
    );
}

export default Subject;