import React, { createContext, useState, useEffect } from 'react';
import {
    PopularMovieGet,
    DiscoverMovieGet,
    DiscoverTvGet,
    SearchGet,
    SingleGet,
} from './../constants/constants';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split('/')[2];
    const [moviePopular, setMoviePopular] = useState([]);
    const [movieDiscover, setMovieDiscover] = useState([]);
    const [tvDiscover, setTvDiscover] = useState([]);
    const [searchTrem, setSearchTrem] = useState('');
    const [singleMovie, setSingleMovie] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => popularMovie(), []);
    useEffect(() => discoverMovie(), []);
    useEffect(() => discoverTv(), []);
    useEffect(() => singleMovieGet(), [movie_id]);

    const popularMovie = () => {
        setIsLoading(true);
        fetch(PopularMovieGet())
            .then((response) => response.json())
            .then((data) => {
                setMoviePopular(data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const discoverMovie = () => {
        setIsLoading(true);
        fetch(DiscoverMovieGet())
            .then((response) => response.json())
            .then((data) => {
                setMovieDiscover(data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const discoverTv = () => {
        setIsLoading(true);
        fetch(DiscoverTvGet())
            .then((response) => response.json())
            .then((data) => {
                setTvDiscover(data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const singleMovieGet = (movie_id) => {
        if (movie_id) {
            fetch(SingleGet(movie_id))
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setSingleMovie(data.json());
                })
                .catch((err) => console.log(err));
        }
    };

    const searchInput = async (q, t, s) => {
        let url;

        if (t === 'MoviePopular') {
            url = q === '' ? PopularMovieGet() : SearchGet(q, s);
        }
        if (t === 'MovieDiscover') {
            url = q === '' ? DiscoverMovieGet() : SearchGet(q, s);
        }
        if (t === 'TvDiscover') {
            url = q === '' ? DiscoverTvGet() : SearchGet(q, s);
        }

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSearchTrem(data.results);
                if (t === 'MoviePopular') {
                    setMoviePopular(data.results);
                }
                if (t === 'MovieDiscover') {
                    setMovieDiscover(data.results);
                }
                if (t === 'TvDiscover') {
                    setTvDiscover(data.results);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <MoviesContext.Provider
            value={{
                isLoading,
                moviePopular,
                movieDiscover,
                tvDiscover,
                searchInput,
                searchTrem,
                singleMovieGet,
                singleMovie,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
