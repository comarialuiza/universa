import React, { useState } from 'react';
import Calendar from 'rc-year-calendar';
import moment from 'moment';
import { Button } from 'antd';

import Header from '../../components/Header';

import { fifteenWeekSemester, eighteenWeekSemester } from '../../utils/calendarMockData';

import { Container } from './styles';

interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
}

const CalendarContainer: React.FC = () => {
  const [ weeks, setWeeks ] = useState(15);
  const [ language ] = useState('pt');

  return (
    <>
      <Header />
      <Container className="container">
        <Button onClick={ () => setWeeks(15) }>Para cursos de 15 semanas</Button>
        <Button onClick={ () => setWeeks(18) }>Para cursos de 18 semanas</Button>

        <Calendar 
          dataSource={ weeks === 15 ? fifteenWeekSemester : eighteenWeekSemester }
          language="fr"
        />

        { /* dataSource.map((event: Event) => (
          <div>
            <span>{ moment(event.startDate).format('L') } - { moment(event.endDate).format('L') }</span>
            <p>{ event.name }</p>
          </div>
        )) */ }
      </Container>
    </>
  );
}

export default CalendarContainer;