import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Reports: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <p>Reports</p>
            </Container>
        </>
    );
}

export default Reports;