import React, { Fragment, useContext } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import './slider-home.styles.scss';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slick from 'react-slick';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import StarRateIcon from '@material-ui/icons/StarRate';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MoviesContext } from '../../../contexts/moviesContext';

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const SliderHome = () => {
    const { isLoading, moviePopular } = useContext(MoviesContext);

    return (
        <Fragment>
            <div className="slider">
                <Container maxWidth="lg">
                    <main>
                        {isLoading ? (
                            <CircularProgress
                                color="secondary"
                                className="isLoading"
                            />
                        ) : (
                            <Slick {...settings} className="slick-home">
                                {moviePopular.map((arrMovie) => (
                                    <div key={arrMovie.id}>
                                        <div className="row-flex">
                                            <Grid item md={8} sm={12} xs={12}>
                                                <Paper className="slider__box">
                                                    <div className="slider__title">
                                                        <h1>
                                                            <Link href="#">
                                                                {arrMovie.title}
                                                            </Link>
                                                        </h1>
                                                        <p className="overview">
                                                            {arrMovie.overview}
                                                        </p>
                                                        <div className="mv-details">
                                                            <div className="star">
                                                                <StarRateIcon className="icons__star" />
                                                                <span>
                                                                    {
                                                                        arrMovie.vote_average
                                                                    }
                                                                </span>{' '}
                                                                /10
                                                            </div>
                                                            <ul className="mv-infor">
                                                                <li>
                                                                    Release:{' '}
                                                                    {arrMovie.release_date +
                                                                        '-' +
                                                                        arrMovie.id}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <LinkRouter
                                                            to={`/detail/movie/${arrMovie.id}`}
                                                            className="btn__more"
                                                        >
                                                            more detail
                                                        </LinkRouter>
                                                    </div>
                                                </Paper>
                                            </Grid>
                                            <Grid item md={4} sm={12} xs={12}>
                                                <Paper className="slider__box">
                                                    <img
                                                        className="slider__img"
                                                        src={
                                                            'https://image.tmdb.org/t/p/original' +
                                                            arrMovie.poster_path
                                                        }
                                                        alt={arrMovie.title}
                                                    />
                                                </Paper>
                                            </Grid>
                                        </div>
                                    </div>
                                ))}
                            </Slick>
                        )}
                    </main>
                </Container>
            </div>
        </Fragment>
    );
};

SliderHome.displayName = 'Home';
export default SliderHome;
