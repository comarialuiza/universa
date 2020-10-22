import React, { useState } from 'react';

import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import { Container, Report } from './styles';
import { PDFViewer, PDFDownload } from './../../styles/global';

import certificate from './../../assets/images/certificate.pdf';

const Reports: React.FC = () => {
    const [ modalVisibility, setModalVisibility ] = useState(false);

    return (
        <>
            <Header />
            <Container className="container">
                <Report onClick={ () => setModalVisibility(true) }>Comprovante de Matrícula</Report>
                <Report onClick={ () => setModalVisibility(true) }>Histórico Escolar Com IRA</Report>
                <Report onClick={ () => setModalVisibility(true) }>Histórico Integralização</Report>
                <Report onClick={ () => setModalVisibility(true) }>Solicitação de Matricula</Report>

                { modalVisibility && (
                    <PopUp setModalVisibility={ setModalVisibility } large={ true }>
                        <PDFViewer file={certificate} />
                        <PDFDownload href={certificate} target='_blank'>Fazer download</PDFDownload>
                    </PopUp> 
                )}
            </Container>
        </>
    );
}

export default Reports;