import React, { useState } from 'react';
import { WarningOutlined } from '@ant-design/icons';
import Header from '../../components/Header';
import { UnavailableContainer } from '../../styles/global';
import { Container, AvailableContainer } from './styles';

const Schedule: React.FC = () => {
    const [ semesterActive ] = useState(false);

    return (
        <>
            <Header />
            <Container className="container">
                { semesterActive ? (
                    <AvailableContainer>

                    </AvailableContainer>
                ) : (
                    <UnavailableContainer>
                        <WarningOutlined />
                        <h3>Atenção!</h3>
                        <p>Nenhum semestre está ativo no momento.</p>
                    </UnavailableContainer>
                )}
            </Container>
        </>
    );
}

export default Schedule;