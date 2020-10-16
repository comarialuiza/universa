import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined } from '@ant-design/icons';

import { Container, AvailableContainer, SubjectsAvailable } from './styles';
import { UnavailableContainer } from '../../styles/global';

import subjectsMock from './../../utils/subjectsMockData';

import { SemesterData, Subject } from './../../components/Overview';

const Enrollment: React.FC = () => {
    const [ enrollmentAvailable ] = useState(true);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>
                        <SubjectsAvailable>
                            { subjectsMock.filter(status => status.active === true).map((semester: SemesterData) => (
                                <>
                                    { semester.subjects.map((subject: Subject) => (
                                        <li>{ subject.title }</li>
                                    )) }
                                </>
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