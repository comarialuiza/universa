import React, { useState } from 'react';
import Calendar from 'rc-year-calendar';
import moment from 'moment';

import Header from '../../components/Header';

import { fifteenWeekSemester, eighteenWeekSemester } from '../../utils/calendarMockData';

import { Container, Button, ButtonContainer, EventList, Event, EventName, EventDate, CalendarContent } from './styles';

Calendar.locales['pt'] = {
	days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
	daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
	daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
	months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
	weekShort: 'S',
	weekStart:0
};

interface SelectedEvent {
  color: string;
  name: string;
}

interface Event {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

const CalendarContainer: React.FC = () => {
  const [ weeks, setWeeks ] = useState(15);
  const [ language ] = useState('pt');
  const [ selectedEvent, setSelectedEvent ] = useState<SelectedEvent>();
  const [ dataSource, setDataSource ] = useState(fifteenWeekSemester);

  return (
    <>
      <Header />
      <Container className="container">
        <ButtonContainer>
          <Button 
            active={ weeks === 15 ? true : false }
            onClick={ () => { 
              setWeeks(15);
              setDataSource(fifteenWeekSemester);
            }}
          >
            Para cursos de 15 semanas
          </Button>
          <Button 
            active={ weeks === 18 ? true : false }
            onClick={ () => { 
              setWeeks(18);
              setDataSource(eighteenWeekSemester);
            }}
          >
            Para cursos de 18 semanas
          </Button>
        </ButtonContainer>

        <CalendarContent>
          <Calendar 
            dataSource={ weeks === 15 ? fifteenWeekSemester : eighteenWeekSemester }
            language={ language }
            onDayClick={(date: any, e: MouseEvent) => date.events.length > 0 && setSelectedEvent(date.events[0])}
            style="background"
          />

          <EventList>
            { dataSource.map((event: Event) => (
              <Event eventColor={ selectedEvent?.name === event.name ? selectedEvent.color : 'transparent' } key={ event.id }>
                { event.startDate === event.endDate 
                  ? (
                    <EventDate>
                      { moment(event.startDate).format('DD/MM/YYYY') }
                    </EventDate>
                  )
                  : (
                    <EventDate>
                      { moment(event.startDate).format('DD/MM/YYYY') } - { moment(event.endDate).format('DD/MM/YYYY') }
                    </EventDate>
                  )
                }
                <EventName>{ event.name }</EventName>
              </Event>
            )) }
          </EventList>
        </CalendarContent>
      </Container>
    </>
  );
}

export default CalendarContainer;