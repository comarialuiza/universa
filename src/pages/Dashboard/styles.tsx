import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;

    @media (min-width: 991px) {
        grid-template-columns: 2fr 1fr 1fr 2fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas:
            "generalInfo progress progress ira"
            "generalInfo holiday vacation ira"
            "overview overview overview overview"
        ;
        grid-gap: 30px;
    }

    @media (max-width: 990px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 300px 200px 380px 150px 500px;
        grid-template-areas:
            "generalInfo generalInfo"
            "progress progress"
            "ira ira"
            "holiday vacation"
            "overview overview"
        ;
        grid-gap: 30px;
    }
`;

export const Title = styled.h3`
    font-size: 17px;
    line-height: 25px;
    color: var(--color-text-title);
`;

export const SubContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-white);

    &&.generalInfo {
        grid-area: generalInfo;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    &&.progress {
        grid-area: progress;

        p {
            font-size: 15px;
            color: var(--color-text-complement);

            span {
                color: var(--color-primary);
                font-weight: 500;
            }
        }
    }

    &&.vacation {
        grid-area: vacation;
    }

    &&.overview {
        grid-area: overview;
    }

    &&.holiday {
        grid-area: holiday;
    }

    &&.ira {
        grid-area: ira;

        .content {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        p {
            margin-right: 10px;
            font-size: 15px;
            color: var(--color-text-complement);

            span {
                color: var(--color-primary);
                font-weight: 500;
            }
        }
    }
`;

export const SubTitle = styled.h4`
    color: var(--color-text-complement);
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 300;
`;

export const Description = styled.p`
    font-size: 20px;
    color: var(--color-text-title);
    margin: 0;
`;