import React, { useState } from 'react';
import Calendar from 'rc-year-calendar';
import moment from 'moment';

import Header from '../../components/Header';

import dataSource from '../../utils/calendarMockData';

import { Container } from './styles';

interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
}

const CalendarContainer: React.FC = () => {
  const [ language ] = useState('pt');

  return (
    <>
      <Header />
      <Container>
        <Calendar 
          dataSource={ dataSource }
          language={ language }
        />

        { dataSource.map((event: Event) => (
          <div>
            <span>{ moment(event.startDate).format('L') } - { moment(event.endDate).format('L') }</span>
            <p>{ event.name }</p>
          </div>
        )) }
      </Container>
    </>
  );
}

export default CalendarContainer;