import styled, { createGlobalStyle } from 'styled-components/macro';
import PDF from "react-pdf-js";

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

    .dark-theme {
        filter: hue-rotate(180deg) invert(100%);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
        position: relative;

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
    min-height: 100%;
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

export const FormContainer = styled.form`
    width: 100%;
    background: var(--color-background);
    border-radius: 8px;

    @media (min-width: 481px) {
        max-width: 440px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
    color: var(--color-primary);
`;

export const Input = styled.input`
    border: 0;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    width: 100%;
    border-bottom: 2px solid var(--color-primary);
`;

export const TextArea = styled.textarea`
    height: 100px;
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    border: 0;
    border-bottom: 2px solid var(--color-primary);
    resize: vertical;
`;

export const FileInput = styled.label`
    padding: 8px 12px;
    background-color: var(--color-white);
    border-bottom: 2px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 16px;
    display: block;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;
    text-align: center;
    cursor: pointer;

    svg {
        margin-right: 22px;
    }
`;

export const FakeLabel = styled(Label)`
`;

export const Button = styled.button`
    border: 0;
    display: block;
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background: var(--color-white);
`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    cursor: pointer;
    z-index: 5;

    cursor: pointer;

    &&:after {
        content: 'X';
        height: 30px;
        width: 30px;
        display: block;
        position: absolute;
        top: 50px;
        right: 50px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        color: var(--color-secondary);
        font-weight: bold;
        background-color: var(--color-white);
        border-radius: 50%;
        cursor: pointer;
    }
`;

export const PDFViewer = styled(PDF)`
    width: 100%;
    max-width: 100%;
    position: relative;
`;

export const PDFDownload = styled.a`
    padding: 10px;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 16px;
    text-decoration: none;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 8px;

    &:hover {
        color: var(--color-white);
    }
`;

export default GlobalStyle;