import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
	grid-template-rows: 2fr 1fr;
	grid-template-areas:
		"generalInfo progress progress ira"
		"generalInfo holiday vacation ira"
        "overview overview overview overview"
	;
    grid-gap: 30px;

    p {
        font-size: 15px;
        color: var(--color-text-complement);

        span {
            color: var(--color-primary);
            font-weight: 500;
        }
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
    }

    &&.progress {
        grid-area: progress;
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

            p {
                margin-right: 10px;
            }
        }
    }
`;

export const SubTitle = styled.h4``;

export const Description = styled.p``;