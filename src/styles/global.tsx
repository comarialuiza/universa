import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #faf7f5;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        /* --color-primary: #22223B; */
        --color-primary: #667acd;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        /* --color-secondary: #FFBE0B; */
        --color-secondary: #f1833b;
        --color-secondary-dark: #f1b000;
        --color-tertiary: #726D81;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #333;
        --color-text-complement: #9C98A6;
        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-button-text: #FFFFFF;
        --color-white: #FFFFFF;
        --color-box: #FAFAFC;

        --color-success: #52c41a;
        --color-danger: #faad14;
        --color-error: #ff4d4f;

        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body, input, button, textarea {
        font: 300 1.6rem 'Source Sans Pro', sans-serif;
        color: var(--color-text-base);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);

        @media (min-width: 991px) {
            padding: 40px;
        }

        @media (min-width: 481px) and (max-width: 990px) {
            padding: 30px;
        }

        @media (max-width: 480px) {
            padding: 20px;
        }

    }

    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    .container {
        background: var(--color-background);

        @media (min-width: 1141px) {
            width: calc(100% - 300px);
            height: calc(100vh - 80px);
            border-radius: 0 20px 20px 0;
            overflow: scroll;
            padding: 40px;
        }

        @media (max-width: 1140px) {
            width: 100%;
            padding: 20px;
            border-radius: 20px;
        }
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;

export const UnavailableContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;

    svg {
        font-size: 60px;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        text-align: center;
        color: var(--color-tertiary);
    }

    p {
        color: var(--color-text-complement);
        text-align: center;
        font-size: 16px;
        line-height: 24px;

        @media (min-width: 481px) {
            width: 280px;
        }
    }
`;

export const PageTitle = styled.h2`
    font-family: Megrim;
    font-size: 34px;
    margin-bottom: 20px;
    color: var(--color-primary);
`;

export const Table = styled.table`
    width: 100%;
    font-size: 16px;
`;

export const TableHeader = styled.thead`
    th {
        font-weight: 400;
        color: var(--color-text-title);
        padding-bottom: 10px;
    }
`;

export const TableBody = styled.tbody`  
`;

export const Row = styled.tr`
    th {
        font-weight: 300;
        padding: 8px 0;
        color: var(--color-text-complement);
    }
`;

export default GlobalStyle;