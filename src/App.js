import React, { Fragment } from 'react';

import './assets/css/styles.scss';

import MoviesContextProvider from './contexts/moviesContext';
import Header from './components/common/header/header.component';
import Footer from './components/common/footer/footer.component';

import Main from './components/common/main/main.component';

const App = () => {
    return (
        <div className="App">
            <Fragment>
                <Header />
                <MoviesContextProvider>
                    <Main />
                </MoviesContextProvider>
                <Footer />
            </Fragment>
        </div>
    );
}

export default App;
