import styled from 'styled-components/macro';


export const Container = styled.div`
    .fc-media-screen {
        @media (max-width: 790px) {
            width: 1000px;
        }

        .fc-col-header-cell-cushion  {
            color: var(--color-primary);
        }
    }
`;

export const AvailableContainer = styled.div`
    overflow: scroll;

    .fc .fc-button-primary {
        background-color: var(--color-secondary);
        border-color: var(--color-secondary);

        :focus {
            background-color: var(--color-primary);
            border-color: var(--color-primary);
        }
    }

    .fc .fc-toolbar-title {
        color: var(--color-tertiary);
    }

    @media (min-width: 1141px) {
        .fc {
            max-height: calc(100vh - 160px);
        }
    }

    @media (max-width: 1140px) {
        .fc {
            max-height: calc(100vh - 80px);
        }
    }
`;
