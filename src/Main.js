import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Ultimate Blogging Project</h1>
                    <ul className={'header'}>
                        <li><NavLink to={'/home'}>Home</NavLink></li>
                        <li><NavLink to={'/posts'}>Posts</NavLink></li>
                        <li><NavLink to={'/users'}>Users</NavLink></li>
                    </ul>
                    <div className={'content'}>
                        <Route path="/home" component={Home}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/users" component={Users}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;