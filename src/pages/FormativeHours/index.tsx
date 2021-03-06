import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';

import { Container, NormativeHoursContainer, HoursSum, SubmitButton, NormativeHeader } from './styles';
import Normative from '../../components/Formative';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import normativeHoursMock from '../../utils/normativeHoursMockData';
import { NormativeHour } from '../../components/Formative';
import { FormContainer, Label, Input, FileInput, FakeLabel, Button } from '../../styles/global';

const FormativeHours: React.FC = () => {
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
            Somatório das horas formativas: <span>{ normativeSum }</span>
          </HoursSum>
          <SubmitButton onClick={ () => setModalVisibility(true) }>
            Adicionar Hora Formativa
          </SubmitButton>
        </NormativeHeader>

        { modalVisibility && (
          <PopUp setModalVisibility={ setModalVisibility } title='Adicionar hora formativa'>
            <FormContainer>
              <Label htmlFor="name">
                Nome
              </Label>
              <Input id="name"/>

              <Label htmlFor="hours">
                Horas
              </Label>
              <Input id="hours" type='number'/>

              <FakeLabel>
                Anexar certificado
              </FakeLabel>
              <FileInput htmlFor="certificate">
                <UploadOutlined/>
                Certificado
              </FileInput>
              <Input id="certificate" type='file' style={{ display: 'none' }} />

              <Button>Enviar</Button>
            </FormContainer>
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

export default FormativeHours;