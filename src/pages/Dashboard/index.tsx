import React from 'react';
import { Progress } from 'antd';

import { Container, Title, SubContainer, Description, SubTitle } from './styles';
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

        <SubContainer>
          <SubTitle>Matrícula</SubTitle>
          <Description>GRR20171816</Description>

          <SubTitle>Curso</SubTitle>
          <Description>Curso de Expressão Gráfica - Bacharelado</Description>

          <SubTitle>Período de Matrícula</SubTitle>
          <Description>Período Especial (1) / 2020</Description>

          <SubTitle>Período Atual</SubTitle>
          <Description>7</Description>
        </SubContainer>
      </Container>
    </>
  );
}

export default Dashboard;