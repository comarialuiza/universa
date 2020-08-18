import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

import { Container, NormativeHoursContainer, HoursSum } from './styles';
import Normative from '../../components/Normative';
import Header from '../../components/Header';

import normativeHoursMock from '../../utils/normativeHoursMockData';

const NormativeHours: React.FC = () => {
  const [ normativeSum, setNormativeSum ] = useState(0);

  const normativeTotal = normativeHoursMock.reduce(
    (acc, cur) => {
      return acc + cur.hours;
    }, 0
  );

  useEffect(() => {
    setNormativeSum(normativeTotal);
  }, [ normativeTotal ]);

  return (
    <>
      <Header />
      <Container>
        <HoursSum>
          Somatório das horas normativas: <span>{ normativeSum }</span>
        </HoursSum>
        <Button type="primary">
          Adicionar Hora Normativa
        </Button>
        <NormativeHoursContainer>
          { normativeHoursMock.map(normativeHour => (
            <Normative normative={ normativeHour }/>
          )) }
        </NormativeHoursContainer>
      </Container>
    </>
  );
}

export default NormativeHours;