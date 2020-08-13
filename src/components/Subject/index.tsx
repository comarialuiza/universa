import React from 'react';

import { Container, Title } from './styles';

interface Subject {
    title: string;
    code: string;
    teacher: string;
    overallGrade: number;
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
            <span>{ subject.overallGrade }</span>
        </Container>
    );
}

export default Subject;