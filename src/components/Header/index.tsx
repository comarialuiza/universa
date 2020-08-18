import React, { useState } from 'react';
import { PieChartOutlined, CalendarOutlined, ClockCircleOutlined, LineChartOutlined, BookOutlined } from '@ant-design/icons';

import { Container, Title, Welcome, Navigation, NavigationLink } from './styles';

const Header: React.FC = () => {
    const [ user ] = useState('Maria Luiza');

    const [visible, setVisible] = useState(true);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <Container>
            <Welcome>Olá { user }, bem vindo/a ao</Welcome>
            <Title>Universa</Title>

            <Navigation>
                <NavigationLink activeClassName="activeLink" exact to="/">
                    <PieChartOutlined />
                    Informações Gerais
                </NavigationLink>

                <NavigationLink activeClassName="activeLink" to="/calendar">
                    <CalendarOutlined />
                    Calendário
                </NavigationLink>

                <NavigationLink activeClassName="activeLink" to="/normativehours">
                    <ClockCircleOutlined />
                    Horas Normativas
                </NavigationLink>

                <NavigationLink activeClassName="activeLink" to="/performance">
                    <LineChartOutlined />
                    Performance Semestral
                </NavigationLink>

                <NavigationLink activeClassName="activeLink" to="/subjects">
                    <BookOutlined />
                    Disciplinas
                </NavigationLink>
            </Navigation>

            
        </Container>
    );
}

export default Header;