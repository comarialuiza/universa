import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #F0F0F7;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        --color-primary: #22223B;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        --color-secundary: #FFBE0B;
        --color-secundary-dark: #f1b000;
        --color-tertiary: #726D81;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #22223B;
        --color-text-complement: #9C98A6;
        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-button-text: #FFFFFF;
        --color-box-base: #FFFFFF;
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

    body {
        background: var(--color-background);
    }

    body, input, button, textarea {
        font: 300 1.6rem 'Source Sans Pro', sans-serif;
        color: var(--color-text-base);
    }

    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;

export default GlobalStyle;