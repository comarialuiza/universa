import styled from 'styled-components/macro';

export const Container = styled.div`
    .day-header {
        color: var(--color-primary);
        font-weight: 300;
    }

    .month-title {
        color: var(--color-primary);
    }

    .year-title {
        color: var(--color-primary);
    }

    .calendar .calendar-header {
        display: none;
    }
`;

export const Button = styled.button`
    background-color: var(--color-secondary);
    border-radius: 8px;
    color: var(--color-input-background);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 15px;
    border: 0;
`;

export const ButtonContainer = styled.div`
    margin-bottom: 20px;

    @media (min-width: 481px) {
        > ${ Button }:first-of-type {
            margin-right: 20px;
        }
    }

    @media (max-width: 480px) {
        >${ Button } {
            width: 100%;
            text-align: center;

            &:first-of-type {
                margin-bottom: 10px;
            }
        }
    }
`;

export const EventList = styled.ul`
    list-style: none;

    @media (min-width: 991px) {
        min-width: 350px;
        margin-left: 20px;
        max-height: 880px;
        overflow: scroll;
    }

    @media (max-width: 990px) {
        margin-top: 20px;
    }
`;

export const Event = styled.li<{ eventColor: string }>`
    padding-left: 20px;
    border-left: ${({ eventColor }) => eventColor ? `5px solid ${eventColor}` : '5px solid transparent'};
    margin-bottom: 20px;
`;

export const EventName = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: var(--color-tertiary);
    text-align: justify;
`;

export const EventDate = styled.p`
    font-size: 15px;
    margin-bottom: 5px;
    color: var(--color-primary);
`;

export const CalendarContent = styled.div`
    @media (min-width: 991px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`;