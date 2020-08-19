import React from 'react';
import { Progress } from 'antd';

import { Container, Title, SubContainer } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <SubContainer>
          <Title>Progresso acadêmico</Title>
          <Progress
            strokeColor={{
              '0%': '#9871F5',
              '100%': '#FFBE0B',
            }}
            percent={ 25 }
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