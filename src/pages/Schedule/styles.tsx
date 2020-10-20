import styled from 'styled-components/macro';


export const Container = styled.div`
    height: calc(100vh - 80px);

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
`;
