import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    flex-direction: column;

    @media (max-width: 990px) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 40px;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    max-width: 300px;
    padding: 40px;
    background: var(--color-background);
    border-radius: 8px;

    @media (min-width: 481px) {
        width: 440px;
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

export const Button = styled.button<{ buttonType: string }>`
    padding: 8px 12px;
    font-size: 14px;
    background: ${ props => props.buttonType === 'primary' ? 'var(--color-secondary)' : 'var(--color-white)' };
    border: 2px solid var(--color-secondary);
    color: ${ props => props.buttonType === 'primary' ? 'var(--color-white)' : 'var(--color-secondary)' };
    border-radius: 6px;
`;

export const ButtonContainer = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;