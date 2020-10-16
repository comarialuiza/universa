import React from 'react';

import { Container, Title, Hours, Button } from './styles';

export interface NormativeHour {
    id: string;
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
            <Hours>Horas: { normative.hours }</Hours>
            <Button>Ver certificado</Button>
        </Container>
    );
}

export default Normative;