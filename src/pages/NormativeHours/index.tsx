import React from 'react';

import { Container } from './styles';
import Normative from '../../components/Normative';

import normativeHoursMock from './normativeHoursMockData';

const NormativeHours: React.FC = () => {
  return (
    <Container>
      { normativeHoursMock.map(normativeHour => (
        <Normative normative={ normativeHour }/>
      )) }
    </Container>
  );
}

export default NormativeHours;