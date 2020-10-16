import React, { useState } from 'react';
import { Statistic, Progress } from 'antd';

import { Container, Title, CodeFlag, Teacher, StatisticContainer, GradeContainer, InfoContainer, Info, Button } from './styles';
import { Table, TableHeader, TableBody, Row, FormContainer, Label, Input } from '../../styles/global';

import PopUp from '../../components/PopUp';

interface GradeProvider {
    id: string;
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
    const [ modalVisibility, setModalVisibility ] = useState(false);

    return (
        <Container type={ parent }>
            <CodeFlag>{ subject.code }</CodeFlag>

            { parent === 'subjects' ? (
                <>
                    <Title>
                        { subject.title }
                    </Title>
                    <Teacher>Professor(a): { subject.teacher }</Teacher>
                    <StatisticContainer>
                        <Statistic title="Nota" value={ subject.grade } suffix="/ 100" />
                        <Statistic title="Frequência" value={ subject.frequency } suffix="/ 100" />
                    </StatisticContainer>
                </>
            ) : (
                <>
                    <Info>
                        <InfoContainer>
                            <Title>
                                { subject.title }
                            </Title>
                            <Teacher>Professor(a): { subject.teacher }</Teacher>
                            <Button onClick={ () => setModalVisibility(true) }>Entrar em contato com o/a professor(a)</Button>
                            <Button>Acessar grade currícular</Button>
                            <Button>Acessar lista de livros e materiais recomendados</Button>
                        </InfoContainer>
                        <GradeContainer>
                            { subject.gradeProvider && (
                                <Table>
                                    <TableHeader>
                                        <tr>
                                            <th>Trabalho/prova</th>
                                            <th>Nota</th>
                                        </tr>
                                    </TableHeader>
                                    <TableBody>
                                        { subject.gradeProvider && subject.gradeProvider.map((gradeData: GradeProvider) => (
                                            <Row key={ gradeData.id }>
                                                <th style={{ width: '230px' }}>
                                                    { gradeData.title }
                                                </th>
                                                <th>
                                                    <Progress 
                                                        percent={gradeData.grade} 
                                                        size="small" 
                                                        strokeColor={ gradeData.grade < 70 ? '#f1833b' : '#667acd'}
                                                    />
                                                </th>
                                            </Row>
                                        )) }
                                    </TableBody>
                                </Table>
                            ) }
                        </GradeContainer>
                    </Info>
                </>
            ) }

            {
                modalVisibility && (
                    <PopUp setModalVisibility={ setModalVisibility } title='Entrar em contato com o professor'>
                        <FormContainer>
                            <Label htmlFor="subject">
                                Assunto
                            </Label>
                            <Input id="subject"/>

                            <Label htmlFor="message">
                                Mensagem
                            </Label>
                            <Input id="message"/>

                            <Button>Enviar</Button>
                        </FormContainer>
                    </PopUp>
                )
            }
        </Container>
    );
}

export default Subject;