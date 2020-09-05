import React, { Fragment, useContext } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import './search.styles.scss';

import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Search from '../../common/search/search.component';
import MovieResult from '../../common/movieResult/movieResult.component';

import { MoviesContext } from '../../../contexts/moviesContext';

const MovieDiscoverPage = () => {
    const { movieDiscover } = useContext(MoviesContext);

    return (
        <Fragment>
            <div className="hero page__hero">
                <Container maxWidth="lg">
                    <div className="hero-ct">
                        <h1>Search</h1>
                        <ul className="breadcumb">
                            <li className="active">
                                <LinkRouter to="/">Home</LinkRouter>
                            </li>
                            <li>
                                <ArrowForwardIosIcon
                                    className="arrow__right"
                                    style={{ color: 'white' }}
                                />
                                Search
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className="page__single">
                <Container maxWidth="lg">
                    <Search
                        tip="MovieDiscover"
                        sQuery="/movie"
                        getData={movieDiscover}
                    />
                    <MovieResult getData={movieDiscover} />
                </Container>
            </div>
        </Fragment>
    );
};
MovieDiscoverPage.displayName = 'MovieDiscoverPage';
export default MovieDiscoverPage;
