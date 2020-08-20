import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Enrollment from './pages/Enrollment';
import CalendarComponent from './pages/Calendar';
import NormativeHours from './pages/NormativeHours';
import Performance from './pages/Performance';
import Reports from './pages/Reports';
import Schedule from './pages/Schedule';
import Subjects from './pages/Subjects';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Dashboard }/>
                <Route path="/login" exact component={ Login }/>
                <Route path="/matricula" exact component={ Enrollment } />
                <Route path="/calendario" exact component={ CalendarComponent }/>
                <Route path="/horasnormativas" exact component={ NormativeHours }/>
                <Route path="/semestreatual" exact component={ Performance }/>
                <Route path="/relatorios" exact component={ Reports } />
                <Route path="/horarios" exact component={ Schedule } />
                <Route path="/disciplinas" exact component={ Subjects }/>
            </Switch>
        </BrowserRouter>
    )
}