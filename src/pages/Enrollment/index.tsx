import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined, WarningOutlined } from '@ant-design/icons';

import PopUp from './../../components/PopUp';
import { Container, AvailableContainer, SubjectsContainer, Title, Description, SubjectAvailable, SubjectTitle, SubjectTeacher, SubjectHours, SubjectCode, SubjectsList, SubjectStatus, NoSubjects, ButtonsContainer, Button, FlexContainer } from './styles';
import { UnavailableContainer } from '../../styles/global';

import enrollmentMock from './../../utils/enrollmentMockData';

interface ScheduleData {
    dayOfTheWeek: string;
    hour: string;
}
interface EnrollmentData {
    title: string;
    code: string;
    teacher: string;
    hours: number;
    schedule: ScheduleData[];
    status?: string;
}

const Enrollment: React.FC = () => {
    const [ messageTitle, setMessageTitle ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ enrollmentAvailable ] = useState(true);
    const [ chosenSubjects, setChosenSubjects ] = useState<EnrollmentData[]>([]);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>
                        <FlexContainer>
                            <SubjectsContainer>
                                <Title>Disciplinas disponíveis no semestre 2020.2</Title>
                                <Description>Para solicitar uma disciplina, por favor clique na mesma. Ela irá aparecer na lista ao lado.</Description>
                                <SubjectsList>
                                    { enrollmentMock.map((subject: EnrollmentData) => (
                                        <SubjectAvailable 
                                            onClick={ () => {
                                                const alreadyChosenSubject = chosenSubjects.filter(filterSubject => {
                                                    return filterSubject.code === subject.code;
                                                });

                                                if (alreadyChosenSubject.length === 0) {
                                                    setChosenSubjects([...chosenSubjects, subject]);
                                                } else {
                                                    setMessageTitle('Erro ao adicionar disciplina');
                                                    setMessage('Você já adicionou essa disciplina. Por favor tente adicionar outra para prosseguir.');
                                                    setModalVisibility(true);
                                                }
                                            } }
                                            key={ subject.code }
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
                                    { chosenSubjects.length < 1 && (
                                        <NoSubjects>
                                            <WarningOutlined />  
                                            <h3>Nenhuma disciplina selecionada</h3>  
                                            <p>Para selecionar uma disciplina, clique no botão de + em uma das disciplinas ao lado.</p>
                                        </NoSubjects>
                                    )}
                                    { chosenSubjects?.map((subject: EnrollmentData) => (
                                        <SubjectAvailable 
                                            onClick={ () => {
                                                const newChosenSubjects = chosenSubjects.filter(filterSubject => {
                                                    return filterSubject.code !== subject.code;
                                                })
                                                setChosenSubjects(newChosenSubjects);
                                            } }
                                            key={ subject.code }
                                        >
                                            <SubjectTitle>{ subject.title }</SubjectTitle>
                                            <SubjectCode>{ subject.code }</SubjectCode>
                                            <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                            <SubjectHours>{ subject.hours } horas</SubjectHours>
                                            { subject.status && <SubjectStatus>{ subject.status }</SubjectStatus> }
                                        </SubjectAvailable>
                                    )) }
                                </SubjectsList>
                            </SubjectsContainer>  
                        </FlexContainer>
                        <ButtonsContainer>
                            <Button 
                                bg='cancel' 
                                disabled={ chosenSubjects.length < 1 && true }
                                onClick={ () => {
                                    setMessageTitle('Solicitação cancelada');
                                    setMessage('A sua solicitação de disciplinas para o semestre 2020.2 foi cancelada. Você pode realizar outra solicitação caso deseje.');
                                    setModalVisibility(true);
                                    setChosenSubjects([]);
                                } }
                            >
                                Cancelar solicitação
                            </Button>
                            <Button 
                                bg='confirm' 
                                disabled={ chosenSubjects.length < 1 && true }
                                onClick={ () => {
                                    setMessageTitle('Solicitação confirmada');
                                    setMessage('A sua solicitação de disciplinas para o semestre 2020.2 foi confirmada. Volte à essa página futuramente para conferir o status das disciplinas');
                                    setModalVisibility(true);
                                } }
                            >
                                Confirmar solicitação
                            </Button>
                        </ButtonsContainer>

                        { modalVisibility && (
                            <PopUp title={ messageTitle } setModalVisibility={ setModalVisibility }>
                                <p>{ message }</p>
                            </PopUp>
                        ) }
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