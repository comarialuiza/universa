import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined, WarningOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';

import PopUp from './../../components/PopUp';
import { Container, AvailableContainer, SubjectsContainer, Title, Description, SubjectAvailable, SubjectTitle, SubjectTeacher, SubjectHours, SubjectCode, SubjectsList, SubjectStatus, NoSubjects, ButtonsContainer, Button, FlexContainer, SubjectData, TableContainer, TableHeader, ActionButton } from './styles';
import { UnavailableContainer, TableBody, Row } from '../../styles/global';

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

    const [ showStatus, setShowStatus ] = useState(false);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>
                        <FlexContainer>
                            <SubjectsContainer>
                                <Title>Disciplinas disponíveis no semestre 2020.2</Title>
                                <Description>Para solicitar uma disciplina, por favor clique no botão de +. Ela irá aparecer na lista ao lado.</Description>
                                <SubjectsList>
                                    { enrollmentMock.map((subject: EnrollmentData) => (
                                        <SubjectAvailable 
                                            key={ subject.code }
                                        >
                                            <ActionButton
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
                                            >
                                                <PlusOutlined />
                                            </ActionButton>
                                            <SubjectData>
                                                <SubjectTitle>{ subject.title }</SubjectTitle>
                                                <SubjectCode>{ subject.code }</SubjectCode>
                                                <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                                <SubjectHours>{ subject.hours } horas</SubjectHours>
                                            </SubjectData>
                                            <TableContainer>
                                                <TableHeader>
                                                    <tr>
                                                        <th>Dia da semana</th>
                                                        <th>Horário</th>
                                                    </tr>
                                                </TableHeader>
                                                <TableBody>
                                                    { subject.schedule.map(schedule => (
                                                        <Row key={ schedule.dayOfTheWeek }>
                                                            <th>{ schedule.dayOfTheWeek }</th>
                                                            <th>{ schedule.hour }</th>
                                                        </Row>
                                                    )) }
                                                </TableBody>
                                            </TableContainer>
                                        </SubjectAvailable>
                                    )) }
                                </SubjectsList>
                            </SubjectsContainer>  

                            <SubjectsContainer>
                                <Title>Disciplinas a requisitar para o semestre 2020.2</Title>
                                <Description>Para cancelar a solicitação de uma disciplina, por favor clique no botão de x. Ela irá desaparecer da lista abaixo e a solicitação será cancelada.</Description>
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
                                            key={ subject.code }
                                        >
                                            <ActionButton
                                                onClick={ () => {
                                                    const newChosenSubjects = chosenSubjects.filter(filterSubject => {
                                                        return filterSubject.code !== subject.code;
                                                    })
                                                    setChosenSubjects(newChosenSubjects);
                                                } }
                                            >
                                                <CloseOutlined />
                                            </ActionButton>
                                            <SubjectData>
                                                <SubjectTitle>{ subject.title }</SubjectTitle>
                                                <SubjectCode>{ subject.code }</SubjectCode>
                                                <SubjectTeacher>{ subject.teacher }</SubjectTeacher>
                                                <SubjectHours>{ subject.hours } horas</SubjectHours>
                                                { showStatus && <SubjectStatus>{ subject.status }</SubjectStatus> }
                                            </SubjectData>
                                            <TableContainer>
                                                <TableHeader>
                                                    <tr>
                                                        <th>Dia da semana</th>
                                                        <th>Horário</th>
                                                    </tr>
                                                </TableHeader>
                                                <TableBody>
                                                    { subject.schedule.map(schedule => (
                                                        <Row key={ schedule.dayOfTheWeek }>
                                                            <th>{ schedule.dayOfTheWeek }</th>
                                                            <th>{ schedule.hour }</th>
                                                        </Row>
                                                    )) }
                                                </TableBody>
                                            </TableContainer>
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
                                    setShowStatus(true);
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