import { createGlobalStyle } from 'styled-components';

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
        --color-text-title: #22223B;
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

        @media (min-width: 991px) {
            background-color: var(--color-primary);
            padding: 40px;
        }
    }

    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    .container {
        width: calc(100% - 300px);
        height: calc(100vh - 80px);
        background: var(--color-background);
        border-radius: 0 20px 20px 0;
        overflow: scroll;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;

export default GlobalStyle;