import React from 'react';

import { Container, Title } from './styles';

interface Subject {
    title: string;
    code: string;
    teacher: string;
    grade: number;
    frequency: number;
    status: string;
}

interface Props {
    subject: Subject;
}

const Subject: React.FC<Props> = ({ subject }) => {
    return (
        <Container>
            <Title>
                <h3>{ subject.title }</h3>
                <span>{ subject.code }</span>
            </Title>
            <p>{ subject.teacher }</p>
            <p>Nota: { subject.grade }</p>
            <p>Frequência: { subject.frequency }%</p>
        </Container>
    );
}

export default Subject;