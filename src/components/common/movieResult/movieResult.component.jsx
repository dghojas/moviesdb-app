import React, { Fragment } from 'react';

import './movieResult.styles.scss';

import Link from '@material-ui/core/Link';
import StarRateIcon from '@material-ui/icons/StarRate';

import AltPoster from '../../../assets/img/nofound_image.jpg';
import NoResults from './../noresults/noresults.component';

const MovieResult = ({ getData }) => {
    return (
        <Fragment>
            {getData.length ? (
                <div className="flex__wrapMovielist">
                    {getData.map((data) => (
                        <div className="movie__item" key={data.id}>
                            <img
                                src={
                                    data.poster_path
                                        ? 'https://image.tmdb.org/t/p/original' +
                                          data.poster_path
                                        : AltPoster
                                }
                                alt={data.title}
                            />
                            <Link href="#" className="hvr__inner">
                                Read more
                            </Link>
                            <div className="mv__item__infor">
                                <h6>
                                    <Link href="#">{data.title}</Link>
                                </h6>
                                <p className="rate">
                                    <StarRateIcon className="icons__star" />
                                    <span>{data.vote_average}</span> /10
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoResults />
            )}
        </Fragment>
    );
};

export default MovieResult;
