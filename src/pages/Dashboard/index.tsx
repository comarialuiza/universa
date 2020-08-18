import React from 'react';
import { Progress } from 'antd';

import { Container, ProgressTitle, SubContainer } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <SubContainer>
          <ProgressTitle>Progresso acadêmico</ProgressTitle>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={ 25 }
          />
        </SubContainer>
      </Container>
    </>
  );
}

export default Dashboard;