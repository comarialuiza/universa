import styled from 'styled-components/macro';

export const Container = styled.div<{large: boolean}>`
    padding: 40px;
    background-color: var(--color-background);
    position: relative;
    width: 100%;
    max-width: ${({ large }) => large ? '900px' : '500px'};
    max-height: 700px;
    overflow: scroll;
    border-radius: 20px;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    z-index: 15;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media (max-width: 990px) {
        max-width: 90%;
        max-height: auto;
    }

    p {
        color: var(--color-text-complement);
        text-align: center;
        font-size: 16px;
        line-height: 22px;
    }

    canvas {
        width: 100%!important;
        height: auto!important;
    }
`;

export const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    color: var(--color-primary);
    font-weight: normal;
    text-align: center;
`;