import React, { useState } from 'react';
import Header from '../../components/Header';
import { DownloadOutlined } from '@ant-design/icons';

import { Container, AvailableContainer } from './styles';
import { UnavailableContainer } from '../../styles/global';

const Enrollment: React.FC = () => {
    const [ enrollmentAvailable, setEnrollmentAvailable ] = useState(false);

    return (
        <>
            <Header />
            <Container className="container">
                { enrollmentAvailable ? (
                    <AvailableContainer>

                    </AvailableContainer>
                ) : (
                    <UnavailableContainer>
                        <DownloadOutlined />
                        <h3>Atenção!</h3>
                        <p>O período para solicitação ou ajuste de matrícula não está aberto.</p>
                    </UnavailableContainer>
                )}
            </Container>
        </>
    );
}

export default Enrollment;