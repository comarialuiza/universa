import React from 'react';
import { Progress, Statistic } from 'antd';

import Overview from '../../components/Overview';

import { Container, Title, SubContainer, Description, SubTitle } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container className="container">
        <SubContainer className="generalInfo">
          <SubTitle>Matrícula</SubTitle>
          <Description>GRR20171816</Description>

          <SubTitle>Curso</SubTitle>
          <Description>Curso de Expressão Gráfica - Bacharelado</Description>

          <SubTitle>Período de Matrícula</SubTitle>
          <Description>Período Especial (1) / 2020</Description>

          <SubTitle>Período Atual</SubTitle>
          <Description>7</Description>
        </SubContainer>

        <SubContainer className="progress">
          <Title>Progresso acadêmico</Title>
          <p>Parabéns! Você já concluiu 75% da sua graduação!</p>
          <Progress
            strokeColor='#f1833b'
            percent={75}
          />
        </SubContainer>

        <SubContainer className="vacation">
          <Title>Dias até o fim do semestre</Title>
          <Statistic title="Dias até o fim do semestre" value={132} />
        </SubContainer>

        <SubContainer className="overview">
          <Overview />
        </SubContainer>

        <SubContainer className="ira">
          <Title>IRA</Title>
          <div className="content">
            <p>O Índice de Rendimento Acadêmico (IRA) é um indicador de desempenho calculado no fim de cada período letivo.</p>
            <Progress 
              type="circle" 
              percent={92.5} 
              strokeColor='#f1833b'
            />
          </div>
        </SubContainer>
      </Container>
    </>
  );
}

export default Dashboard;