import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined } from '@ant-design/icons';

import { Container, AvailableContainer, SubjectsContainer, Title, Description, SubjectAvailable, SubjectTitle, SubjectTeacher, SubjectHours, SubjectCode, SubjectsList } from './styles';
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
    const [ chosenSubjects, setChosenSubjects ] = useState<EnrollmentData[]>([]);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>
                        <SubjectsContainer>
                            <Title>Disciplinas disponíveis no semestre 2020.2</Title>
                            <Description>Para solicitar uma disciplina, por favor clique na mesma. Ela irá aparecer na lista ao lado.</Description>
                            <SubjectsList>
                                { enrollmentMock.map((subject: EnrollmentData) => (
                                    <SubjectAvailable 
                                        onClick={ () => {
                                            setChosenSubjects([...chosenSubjects, subject]);
                                        } }
                                    >
                                        <SubjectTitle>{ subject.title }</SubjectTitle>
                                        <SubjectCode>{ subject.code }</SubjectCode>
                                        <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                        <SubjectHours>{ subject.hours } horas</SubjectHours>
                                    </SubjectAvailable>
                                )) }
                            </SubjectsList>
                        </SubjectsContainer>  

                        <SubjectsContainer>
                            <Title>Disciplinas a requisitar para o semestre 2020.2</Title>
                            <Description>Para cancelar a solicitação de uma disciplina, por favor clique na mesma. Ela irá desaparecer da lista abaixo e a solicitação será cancelada.</Description>
                            <SubjectsList>
                                { chosenSubjects.length < 1 && <p>Nenhuma disciplina escolhida :( </p>}
                                { chosenSubjects?.map((subject: EnrollmentData) => (
                                    <SubjectAvailable 
                                        onClick={ () => {
                                            setChosenSubjects([...chosenSubjects, subject]);
                                        } }
                                    >
                                        <SubjectTitle>{ subject.title }</SubjectTitle>
                                        <SubjectCode>{ subject.code }</SubjectCode>
                                        <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                        <SubjectHours>{ subject.hours } horas</SubjectHours>
                                    </SubjectAvailable>
                                )) }
                            </SubjectsList>
                        </SubjectsContainer>  
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