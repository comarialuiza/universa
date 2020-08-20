import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Schedule: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <p>Horários</p>
            </Container>
        </>
    );
}

export default Schedule;