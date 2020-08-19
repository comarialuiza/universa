import React from 'react';
import { Statistic, Row, Col, Badge } from 'antd';

import { Container, Title } from './styles';

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
        <Badge.Ribbon text={ subject.code }>
        <Container status={ subject.status }>
            <Title>
                { subject.title }
            </Title>
            <p>Professor(a): { subject.teacher }</p>

            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Nota" value={ subject.grade } suffix="/ 100" />
                </Col>
                <Col span={12}>
                    <Statistic title="Frequência" value={ subject.frequency } suffix="/ 100" />
                </Col>
            </Row>
        </Container>
        </Badge.Ribbon>
    );
}

export default Subject;