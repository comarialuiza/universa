import React, { useState, useEffect } from 'react';

import { Container, NormativeHoursContainer, HoursSum } from './styles';
import Normative from '../../components/Normative';

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
    <Container>
      <HoursSum>
        Somatório das horas normativas: <span>{ normativeSum }</span>
      </HoursSum>
      <NormativeHoursContainer>
        { normativeHoursMock.map(normativeHour => (
          <Normative normative={ normativeHour }/>
        )) }
      </NormativeHoursContainer>
    </Container>
  );
}

export default NormativeHours;