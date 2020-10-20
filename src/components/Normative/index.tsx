import React, { useState } from 'react';

import PopUp from './../PopUp';
import { Container, Title, Hours, Button } from './styles';
import { PDFViewer } from './../../styles/global';

import certificate from './../../assets/images/certificate.pdf';
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
    const [ modalVisibility, setModalVisibility ] = useState(false);

    return (
        <Container key={ normative.id }>
            <Title>{ normative.title }</Title>
            <Hours>Horas: { normative.hours }</Hours>
            <Button onClick={ () => setModalVisibility(true) }>Ver certificado</Button>

            { modalVisibility && (
                <PopUp setModalVisibility={ setModalVisibility } large={ true }>
                    <PDFViewer file={certificate} />
                </PopUp>
            )}
        </Container>
    );
}

export default Normative;