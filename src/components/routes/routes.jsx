import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from '../home/home';
import Me from '../me/me';

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about-me' component={Me}/>
            <Route exact path='/projects' component={Home}/>
            <Route exact path='/experience' component={Home}/>
            <Route exact path='/interests' component={Home}/>

            <Route exact path='/discord' component={() => {
                window.location.replace('https://discord.com/invite/XjUfbq37');
                return null;
            }} />
        </Switch>
    )
}