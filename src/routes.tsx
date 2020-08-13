import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CalendarComponent from './pages/Calendar';
import NormativeHours from './pages/NormativeHours';
import Performance from './pages/Performance';
import Subjects from './pages/Subjects';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Dashboard }/>
                <Route path="/login" exact component={ Login }/>
                <Route path="/calendar" exact component={ CalendarComponent }/>
                <Route path="/normativehours" exact component={ NormativeHours }/>
                <Route path="/performance" exact component={ Performance }/>
                <Route path="/subjects" exact component={ Subjects }/>
            </Switch>
        </BrowserRouter>
    )
}