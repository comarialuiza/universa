import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Title, FormContainer, Label, Input, Button, ButtonContainer } from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  function handleLogin() {
    history.push('/');
  }

  return (
    <Container>
      <FormContainer>
        <Title>Universa</Title>

        <Label>GRR</Label>
        <Input type="text" />

        <Label>Senha</Label>
        <Input type="password" />

        <ButtonContainer>
          <Button buttonType="secondary">Esqueci minha senha</Button>
          <Button onClick={ handleLogin } buttonType="primary">Entrar</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Login;