import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import { Container, Title, FormContainer } from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  function handleLogin() {
    history.push('/');
  }

  return (
    <Container>
      <Title>Universa</Title>

      <FormContainer
        layout="vertical"
        name="basic"
        onFinish={ handleLogin }
      >
        <Form.Item
          label="GRR"
          name="username"
          rules={[{ required: true, message: 'Por favor insira seu GRR.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: 'Por favor insira sua senha.' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Logar
          </Button>
        </Form.Item>
      </FormContainer>
    </Container>
  );
}

export default Login;