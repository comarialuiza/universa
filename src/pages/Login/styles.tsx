import styled from 'styled-components';
import { Form } from 'antd';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;

    @media (max-width: 990px) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 40px;
`;

export const FormContainer = styled(Form)`
    width: 100%;
    max-width: 300px;
`;