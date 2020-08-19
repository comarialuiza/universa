import React from 'react';
import { Button } from 'antd';

import { Container, Title } from './styles';

interface NormativeHour {
    id: number;
    title: string;
    hours: number;
    certificate: string;
}

interface Props {
    normative: NormativeHour;
}

const Normative: React.FC<Props> = ({ normative }) => {
    return (
        <Container key={ normative.id }>
            <Title>{ normative.title }</Title>
            <p>Horas: { normative.hours }</p>
            <Button>Ver certificado</Button>
        </Container>
    );
}

export default Normative;