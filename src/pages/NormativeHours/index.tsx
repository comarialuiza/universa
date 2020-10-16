import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Container, NormativeHoursContainer, HoursSum, SubmitButton, NormativeHeader } from './styles';
import Normative from '../../components/Normative';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import normativeHoursMock from '../../utils/normativeHoursMockData';
import { NormativeHour } from './../../components/Normative';

const NormativeHours: React.FC = () => {
  const [ form ] = Form.useForm();
  const [ normativeSum, setNormativeSum ] = useState(0);
  const [ modalVisibility, setModalVisibility ] = useState(false);

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
      <Container className="container">
        <NormativeHeader>
          <HoursSum>
            Somatório das horas normativas: <span>{ normativeSum }</span>
          </HoursSum>
          <SubmitButton onClick={ () => setModalVisibility(true) }>
            Adicionar Hora Normativa
          </SubmitButton>
        </NormativeHeader>

        { modalVisibility && (
          <PopUp setModalVisibility={ setModalVisibility }>
            <h1>This is a popup</h1>
          </PopUp>
        ) }

        <NormativeHoursContainer>
          { normativeHoursMock.map((normativeHour: NormativeHour) => (
            <Normative normative={ normativeHour } key={ normativeHour.id }/>
          )) }
        </NormativeHoursContainer>
      </Container>
    </>
  );
}

export default NormativeHours;