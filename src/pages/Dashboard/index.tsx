import React from 'react';
import { Progress, Statistic } from 'antd';

import Overview from '../../components/Overview';
import Header from '../../components/Header';

import { Container, Title, SubContainer, Description, SubTitle } from './styles';

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

        </SubContainer>

        <SubContainer className="progress">
          <Title>Progresso acadêmico</Title>
          <p>Parabéns! Você já concluiu <span>87.5%</span> da sua graduação!</p>
          <p>Atualmente você está no período <span>7</span> de <span>8</span>.</p>
          <Progress
            strokeColor='#f1833b'
            percent={87.5}
          />
        </SubContainer>

        <SubContainer className="holiday">
          <Statistic title="Dias até o próximo feriado" value={27} />
        </SubContainer>

        <SubContainer className="vacation">
          <Statistic title="Dias até o fim do semestre" value={132} />
        </SubContainer>

        <SubContainer className="overview">
          <Overview />
        </SubContainer>

        <SubContainer className="ira">
          <Title>IRA</Title>
          <div className="content">
            <p style={{ marginBottom: '0' }}>O Índice de Rendimento Acadêmico (IRA) é um indicador de desempenho calculado no fim de cada período letivo.</p>
            <Progress 
              type="circle" 
              percent={92.5} 
              strokeColor='#f1833b'
            />
          </div>
          <p style={{ marginBottom: '0', marginTop: '6px', textAlign: 'justify' }}>Ter um bom IRA é importante para ter prioridade no processo de matrícula quando há mais interessados que vagas nas disciplinas. Além disso há uma maior possibilidade de pleitear bolsas, pois muitas seleções levam o IRA em consideração.</p>
        </SubContainer>
      </Container>
    </>
  );
}

export default Dashboard;