import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Enrollment: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="container">
                <p>Matrícula</p>
            </Container>
        </>
    );
}

export default Enrollment;