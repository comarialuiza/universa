import React, { useState } from 'react';

import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import { Container, Report } from './styles';
import { PDFViewer } from './../../styles/global';

import certificate from './../../assets/images/certificate.pdf';

const Reports: React.FC = () => {
    const [ modalVisibility, setModalVisibility ] = useState(false);

    return (
        <>
            <Header />
            <Container className="container">
                <Report onClick={ () => setModalVisibility(true) }>Comprovante de Matrícula</Report>
                <Report>Histórico Escolar Com IRA</Report>
                <Report>Histórico Integralização</Report>
                <Report>Solicitação de Matricula</Report>

                { modalVisibility && (
                    <PopUp setModalVisibility={ setModalVisibility } large={ true }>
                        <PDFViewer file={certificate} />
                    </PopUp> 
                )}
            </Container>
        </>
    );
}

export default Reports;