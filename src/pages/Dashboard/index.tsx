import React from 'react';
import { Progress } from 'antd';

import { Container, Title, SubContainer } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container className="container">
        <SubContainer>
          <Title>Progresso acadêmico</Title>
          <Progress
            strokeColor='#f1833b'
            percent={ 75 }
          />
        </SubContainer>

        <SubContainer>
          <Title>Dias até o fim do semestre</Title>
        </SubContainer>
      </Container>
    </>
  );
}

export default Dashboard;