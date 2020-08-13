import React from 'react';

import { Container } from './styles';

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
            <h3>{ normative.title }</h3>
            <p>{ normative.hours }</p>
            <button>Ver certificado</button>
        </Container>
    );
}

export default Normative;