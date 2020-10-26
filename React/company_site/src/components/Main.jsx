import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Contact from './Contact'


export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/About" component={About}></Route>
                <Route exact path="/Contact" component={Contact}></Route>
            </Switch>
        )
    }
}
