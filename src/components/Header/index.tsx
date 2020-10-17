import React, { useState } from 'react';
import { PieChartOutlined, CalendarOutlined, ClockCircleOutlined, LineChartOutlined, BookOutlined, ProjectOutlined, FormOutlined, RiseOutlined, MenuOutlined } from '@ant-design/icons';

import { Container, Title, Welcome, Navigation, NavigationLink, HeaderContainer, User, ButtonMobile } from './styles';
import { Overlay } from './../../styles/global';

const Header: React.FC = () => {
    const [ user ] = useState('Maria Luiza');
    const [ menu, setMenu ] = useState(false);

    return (
        <>
            <ButtonMobile onClick={ () => setMenu(true) }><MenuOutlined /></ButtonMobile>
            { menu && <Overlay onClick={ () => setMenu(false) } /> }
            <Container className={ menu ? 'active' : '' }>
                <HeaderContainer>
                    <Welcome>Olá { user }, bem vindo/a ao</Welcome>
                    <Title>Universa</Title>
                </HeaderContainer>

                <Navigation>
                    <NavigationLink activeClassName="activeLink" exact to="/">
                        <PieChartOutlined />
                        Informações Gerais
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/calendario">
                        <CalendarOutlined />
                        Calendário
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/horasnormativas">
                        <ProjectOutlined />
                        Horas Normativas
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/semestreatual">
                        <LineChartOutlined />
                        Semestre Atual
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/disciplinas">
                        <BookOutlined />
                        Disciplinas
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/matricula">
                        <FormOutlined />
                        Matrícula
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/relatorios">
                        <RiseOutlined />
                        Relatórios
                    </NavigationLink>

                    <NavigationLink activeClassName="activeLink" to="/horarios">
                        <ClockCircleOutlined />
                        Horários
                    </NavigationLink>
                </Navigation>

                <User image="https://images.unsplash.com/photo-1597605706583-c1d11586d209"/>
            </Container>
        </>
    );
}

export default Header;