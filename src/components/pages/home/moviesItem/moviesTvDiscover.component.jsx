import React, { useContext } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import './movies.styles.scss';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slick from 'react-slick';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import StarRateIcon from '@material-ui/icons/StarRate';

import { MoviesContext } from '../../../../contexts/moviesContext';

const multiItem = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

const MoviesDiscover = () => {
    const { isLoading, tvDiscover } = useContext(MoviesContext);

    return (
        <div className="movie-items">
            <Container maxWidth={false}>
                <div className="title-hd">
                    <h2>Tv Discover</h2>
                </div>

                {isLoading ? (
                    <CircularProgress color="secondary" className="isLoading" />
                ) : (
                    <Slick {...multiItem} className="slick__moviesItem">
                        {tvDiscover.map((arrMovie) => (
                            <div key={arrMovie.id}>
                                <div className="movie-item">
                                    <div className="mv-img">
                                        <img
                                            src={
                                                'https://image.tmdb.org/t/p/original' +
                                                arrMovie.poster_path
                                            }
                                            alt={arrMovie.original_name}
                                        />
                                    </div>
                                    <div className="hvr-inner">
                                        <LinkRouter
                                            to={`/detail/tv/${arrMovie.id}`}
                                            className="btn__more"
                                        >
                                            more detail
                                        </LinkRouter>
                                    </div>
                                    <div className="title-in">
                                        <h6>
                                            <Link href="#">
                                                {arrMovie.original_name}
                                            </Link>
                                        </h6>
                                        <p>
                                            <StarRateIcon className="icons__star" />
                                            <span>{arrMovie.vote_average}</span>{' '}
                                            /10
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slick>
                )}
            </Container>
        </div>
    );
};

MoviesDiscover.displayName = 'MoviesDiscover';
export default MoviesDiscover;
