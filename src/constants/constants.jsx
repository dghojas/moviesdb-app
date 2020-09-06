const base_url = 'https://api.themoviedb.org/3';

const getDiscover = '/discover';
const getMovie = '/movie';
const getPopular = '/popular';
const getTv = '/tv';
const getSearch = '/search';

const api_key = '?api_key=043628621c1d67ce2515c3d8b3f12cae';

const language = '&language=en-US';
const sort_by = '&sort_by=popularity.desc';
const include_adult = '&include_adult=false';
const include_video = '&include_video=false';
const region = '&region=CL';
const searchQuery = '&query=';

export const PopularMovieGet = () =>
    `${base_url}${getMovie}${getPopular}${api_key}${language}${region}`;

export const DiscoverMovieGet = () =>
    `${base_url}${getDiscover}${getMovie}${api_key}${language}${sort_by}${include_adult}${include_video}`;

export const DiscoverTvGet = () =>
    `${base_url}${getDiscover}${getTv}${api_key}${language}${sort_by}${include_adult}${include_video}`;

export const SearchGet = (q_search, type) =>
    `${base_url}${getSearch}${type}${api_key}${language}${searchQuery}${q_search}&page=1&include_adult=false`;

export const SingleGet = (tipMovie, movie_id) =>
    `${base_url}/${tipMovie}/${movie_id}${api_key}${language}`;
