import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home.page';
import Search from '../../pages/search/search.page';

const Main = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </Fragment>
    );
};

Main.displayName = 'Main';
export default Main;
