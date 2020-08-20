import React from 'react';
import Header from '../../components/Header';

import { Container, ReportsContainer, Report } from './styles';
import { PageTitle } from '../../styles/global';

const Reports: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <PageTitle>Relatórios</PageTitle>
                <ReportsContainer>
                    <Report>Comprovante de Matrícula</Report>
                    <Report>Histórico Escolar Com IRA</Report>
                    <Report>Histórico Integralização</Report>
                    <Report>Solicitação de Matricula</Report>
                </ReportsContainer>
            </Container>
        </>
    );
}

export default Reports;