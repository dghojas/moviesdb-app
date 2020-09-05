import React from 'react';

import SliderHome from '../../common/slider/slider-home.component';
import MoviesPopular from './moviesItem/moviesPopular.component';
import MoviesDiscover from './moviesItem/moviesDiscover.component';
import MoviesTvDiscover from './moviesItem/moviesTvDiscover.component';

const Home = () => {
    return (
        <div className="wrapper">
            <SliderHome />
            <MoviesPopular />
            <MoviesDiscover />
            <MoviesTvDiscover />
        </div>
    );
};

Home.displayName = 'Home';
export default Home;
