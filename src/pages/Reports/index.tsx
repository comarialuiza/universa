import React from 'react';
import Header from '../../components/Header';

import { Container, Report } from './styles';

const Reports: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <Report>Comprovante de Matrícula</Report>
                <Report>Histórico Escolar Com IRA</Report>
                <Report>Histórico Integralização</Report>
                <Report>Solicitação de Matricula</Report>
            </Container>
        </>
    );
}

export default Reports;