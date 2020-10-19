import React, { useState } from 'react';
import { WarningOutlined } from '@ant-design/icons';

import Header from '../../components/Header';
import { UnavailableContainer } from '../../styles/global';
import { Container, AvailableContainer, Calendar } from './styles';

import timeGridPlugin from '@fullcalendar/timegrid';

import scheduleMock from './../../utils/scheduleMockData';


const Schedule: React.FC = () => {
    const [ semesterActive ] = useState(true);

    return (
        <>
            <Header />
            <Container className="container">
                { semesterActive ? (
                    <AvailableContainer>
                        <Calendar
                            plugins={[ timeGridPlugin ]}
                            initialView="timeGridWeek"
                            weekends={ false }
                            events={ scheduleMock }
                            eventBackgroundColor='#667acd'
                            eventBorderColor='#667acd'
                            eventTextColor='#E6E6F0'
                        />
                    </AvailableContainer>
                ) : (
                    <UnavailableContainer>
                        <WarningOutlined />
                        <h3>Atenção!</h3>
                        <p>Nenhum semestre está ativo no momento.</p>
                    </UnavailableContainer>
                )}
            </Container>
        </>
    );
}

export default Schedule;