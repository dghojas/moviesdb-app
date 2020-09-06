import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home.page';
import Search from '../../pages/search/search.page';
import Detail from '../../pages/detail/detail';

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
                <Route path="/detail/:tipMovie/:idMovie" exact>
                    <Detail />
                </Route>
            </Switch>
        </Fragment>
    );
};

Main.displayName = 'Main';
export default Main;
