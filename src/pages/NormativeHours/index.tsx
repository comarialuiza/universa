import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Container, NormativeHoursContainer, HoursSum, SubmitButton } from './styles';
import Normative from '../../components/Normative';
import Header from '../../components/Header';

import normativeHoursMock from '../../utils/normativeHoursMockData';

const NormativeHours: React.FC = () => {
  const [ form ] = Form.useForm();
  const [ normativeSum, setNormativeSum ] = useState(0);
  const [ modalVisibility, setModalVisibility ] = useState(false);

  function showModal() {
    setModalVisibility(true);
  }

  function handleOk() {
    setModalVisibility(false);
    console.log('Handle ok!');
  }

  function handleCancel() {
    setModalVisibility(false);
    console.log('Handle cancel!');
  }

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
        <SubmitButton type="primary" onClick={ showModal }>
          Adicionar Hora Normativa
        </SubmitButton>

        <Modal
          title="Adicionar hora normativa"
          visible={ modalVisibility }
          onOk={ handleOk } 
          onCancel={ handleCancel }
          okText='Adicionar'
          cancelText='Cancelar'
        >
          <Form
            layout="vertical"
            form={form}
          >
            <Form.Item label="Nome">
              <Input placeholder="Ex: Curso de Inglês" />
            </Form.Item>
            <Form.Item label="Horas">
              <Input placeholder="Ex: 60" />
            </Form.Item>
            <Form.Item label="Arquivo">
              <Button>
                <UploadOutlined /> Selecionar arquivo
              </Button>
            </Form.Item>
          </Form>
        </Modal>

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