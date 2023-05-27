import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import CreateTask from '../pages/CreateTask';
import ListTask from '../pages/ListTaks';
import Home from '../pages/Home';
import EditTask from '../pages/EditTask';

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={CreateTask} />
                <Route path="/list" component={ListTask} />
                <Route path="/edit" component={EditTask} />
            </Switch>
        </Router>
    );
};
export default Routes;
