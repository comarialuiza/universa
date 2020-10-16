import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined } from '@ant-design/icons';

import { Container, AvailableContainer, SubjectsAvailable, AvailableTitle, SubjectAvailable, SubjectTitle, SubjectTeacher, SubjectHours, SubjectCode } from './styles';
import { UnavailableContainer } from '../../styles/global';

import enrollmentMock from './../../utils/enrollmentMockData';
interface EnrollmentData {
    title: string;
    code: string;
    teacher: string;
    hours: number;
}

const Enrollment: React.FC = () => {
    const [ enrollmentAvailable ] = useState(true);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>
                        <AvailableTitle>Disciplinas disponíveis no semestre 2020.2</AvailableTitle>
                        <SubjectsAvailable>
                            { enrollmentMock.map((subject: EnrollmentData) => (
                                <SubjectAvailable>
                                    <SubjectTitle>{ subject.title }</SubjectTitle>
                                    <SubjectCode>{ subject.code }</SubjectCode>
                                    <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                    <SubjectHours>{ subject.hours } horas</SubjectHours>
                                </SubjectAvailable>
                            )) }
                        </SubjectsAvailable>    
                    </AvailableContainer>
                ) : (
                    <UnavailableContainer>
                        <DownloadOutlined />
                        <h3>Atenção!</h3>
                        <p>O período para solicitação ou ajuste de matrícula não está aberto.</p>
                    </UnavailableContainer>
                )}
            </Container>
        </>
    );
}

export default Enrollment;