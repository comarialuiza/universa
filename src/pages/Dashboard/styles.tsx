import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
	grid-template-rows: 3fr 2fr 2fr 3fr;
	grid-template-areas:
		"generalInfo progress vacation"
		"generalInfo progress ira"
        "overview overview overview"
	;
    grid-gap: 30px;
`;

export const Title = styled.h3`
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

    &&.ira {
        grid-area: ira;
    }
`;

export const SubTitle = styled.h4``;

export const Description = styled.p``;