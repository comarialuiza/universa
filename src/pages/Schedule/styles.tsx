import styled from 'styled-components/macro';
import FullCalendar from '@fullcalendar/react';

export const Container = styled.div`
`;

export const AvailableContainer = styled.div``;

export const Calendar = styled(FullCalendar)`
    .fc-col-header-cell-cushion  {
        color: var(--color-primary);
    }
`;