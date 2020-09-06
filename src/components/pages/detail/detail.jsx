import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './detail.styles.scss';

import ImgPoster from '../../../assets/img/nofound_image.jpg';
import AltPoster from '../../../assets/img/bgNotFound.jpg';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import RatingIcon from '@material-ui/icons/StarRate';

import numeral from 'numeral';
import moment from 'moment';

import { SingleGet } from '../../../constants/constants';

const Detail = () => {
    const { tipMovie, idMovie } = useParams();
    const [results, setResults] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let endpointForMovieInfo = SingleGet(tipMovie, idMovie);
        getDetails(endpointForMovieInfo);
    }, [tipMovie, idMovie]);

    const getDetails = (endpoint) => {
        setIsLoading(true);
        fetch(endpoint)
            .then((resp) => resp.json())
            .then((data) => {
                setResults(data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    let bgImage = results.backdrop_path
        ? 'https://image.tmdb.org/t/p/original' + results.backdrop_path
        : AltPoster;
    const arrImage = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const convertRuntime = (num) => {
        let hours = num / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + 'h ' + rminutes + 'm';
    };
    const convertedReleaseDate = results
        ? moment(results.release_date, 'YYYY-MM-DD')
        : null;

    console.log(results);

    return (
        <Fragment>
            {isLoading ? (
                <CircularProgress color="secondary" className="isLoading" />
            ) : (
                <div>
                    <div className="hero sr-single" style={arrImage}>
                        <h1>
                            {results.title
                                ? results.title
                                : results.original_name}
                        </h1>
                    </div>
                    <div className="movie__single">
                        <Container maxWidth="lg">
                            <div className="row-flex">
                                <Grid item md={4} sm={12} xs={12}>
                                    <Paper className="movie__img">
                                        <img
                                            src={
                                                results.poster_path
                                                    ? 'https://image.tmdb.org/t/p/original' +
                                                      results.poster_path
                                                    : ImgPoster
                                            }
                                            alt={results.title}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12}>
                                    <Paper className="movie__info">
                                        <div className="item__info">
                                            <h6>Run Time:</h6>
                                            <div className="time_star">
                                                {results.runtime
                                                    ? convertRuntime(
                                                          results.runtime
                                                      )
                                                    : ''}

                                                {results.vote_average !== 0 && (
                                                    <div className="star">
                                                        <RatingIcon className="icons__star" />
                                                        <span>
                                                            {
                                                                results.vote_average
                                                            }
                                                        </span>
                                                        /10
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="item__info">
                                            <h6>Overview:</h6>
                                            <p>{results.overview}</p>
                                        </div>
                                        <div className="item__info">
                                            <h6>Revenue:</h6>
                                            {results.revenue === 0 ? (
                                                <p>Not Available</p>
                                            ) : (
                                                <p>
                                                    {'$ ' +
                                                        numeral(
                                                            results.revenue
                                                        ).format('0,0')}
                                                </p>
                                            )}
                                        </div>
                                        <div className="item__info">
                                            <h6>Budget:</h6>
                                            {results.budget === 0 ? (
                                                <p>Not Available</p>
                                            ) : (
                                                <p>
                                                    {'$ ' +
                                                        numeral(
                                                            results.budget
                                                        ).format('0,0')}
                                                </p>
                                            )}
                                        </div>
                                        <div className="item__info">
                                            <h6>Release Date:</h6>
                                            <p>
                                                {convertedReleaseDate.format(
                                                    'LL'
                                                )}
                                            </p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

Detail.displayName = 'Detail';
export default Detail;
