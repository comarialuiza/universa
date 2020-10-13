import React, { useState } from 'react';
import Calendar from 'rc-year-calendar';
import moment from 'moment';

import Header from '../../components/Header';

import { fifteenWeekSemester, eighteenWeekSemester } from '../../utils/calendarMockData';

import { Container, Button, ButtonContainer } from './styles';

Calendar.locales['pt'] = {
	days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
	daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
	daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
	months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
	weekShort: 'S',
	weekStart:0
};

interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
}

const CalendarContainer: React.FC = () => {
  const [ weeks, setWeeks ] = useState(15);
  const [ language ] = useState('pt');
  const [ message, setMessage ] = useState('');

  return (
    <>
      <Header />
      <Container className="container">
        <ButtonContainer>
          <Button onClick={ () => setWeeks(15) }>Para cursos de 15 semanas</Button>
          <Button onClick={ () => setWeeks(18) }>Para cursos de 18 semanas</Button>
        </ButtonContainer>

        <Calendar 
          dataSource={ weeks === 15 ? fifteenWeekSemester : eighteenWeekSemester }
          language={ language }
          onDayEnter={ () => {
            console.log('hello!')
          }}
          onDayClick={(e: MouseEvent) => setMessage('Clicked!')}
          style={{
            boxShadow: '#667acd 0px -4px 0px 0px inset'
          }}
        />

        { message && <p> {message}</p>}

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