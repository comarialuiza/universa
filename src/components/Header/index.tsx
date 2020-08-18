import React, { useState } from 'react';

import { Container, Title, Welcome, Navigation, NavigationLink } from './styles';

const Header: React.FC = () => {
    const [ user ] = useState('Maria Luiza');

    return (
        <Container>
            <Welcome>Olá { user }, bem vindo/a ao</Welcome>
            <Title>Universa</Title>

            <Navigation>
                <NavigationLink to="/dashboard">Informações Gerais</NavigationLink>

                <NavigationLink to="/calendar">Calendário</NavigationLink>

                <NavigationLink to="/normativehours">Horas Normativas</NavigationLink>

                <NavigationLink to="/performance">Performance Semestral</NavigationLink>

                <NavigationLink to="/subjects">Disciplinas</NavigationLink>
            </Navigation>
        </Container>
    );
}

export default Header;