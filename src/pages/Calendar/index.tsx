import React, { useEffect, useState } from 'react';
import Calendar from 'rc-year-calendar';

import dataSource from '../../utils/calendarMockData';

import { Container } from './styles';

interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
}

const CalendarContainer: React.FC = () => {
  const [ language ] = useState('pt');

  useEffect(() => {
    console.log(dataSource[0].startDate);
  }, []);

  return (
    <Container>
      <Calendar 
        dataSource={ dataSource }
        language={ language }
      />

      { dataSource.map((event: Event) => (
        <div>
          <p>{ event.name }</p>
        </div>
      )) }
    </Container>
  );
}

export default CalendarContainer;