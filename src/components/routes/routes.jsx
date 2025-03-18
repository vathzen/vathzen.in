import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import Me from '../me/me';
import Experience from '../experiences/experiences';
import Projects from '../projects/projects';
import Bloodborne from '../bloodborne/bloodborne'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-me' component={Me} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/interests' component={Home} />
            <Route exact path='/designs' component={Home} />
            <Route exact path='/bb' component={Bloodborne} />

            <Route exact path='/discord' component={() => {
                window.location.replace('https://discord.gg/MZFaHMJbtU');
                return null;
            }} />
        </Switch>
    )
}