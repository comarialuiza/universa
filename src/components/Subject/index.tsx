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
}

const Subject: React.FC<Props> = ({ subject }) => {
    return (
        <Container status={ subject.status }>
            <Title>
                { subject.title }
            </Title>
            <Teacher>Professor(a): { subject.teacher }</Teacher>

            <CodeFlag>{ subject.code }</CodeFlag>

            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Nota" value={ subject.grade } suffix="/ 100" />
                </Col>
                <Col span={12}>
                    <Statistic title="Frequência" value={ subject.frequency } suffix="/ 100" />
                </Col>
            </Row>
        </Container>
    );
}

export default Subject;