import React, { Fragment, useContext } from 'react';

import './search.styles.scss';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { MoviesContext } from '../../../contexts/moviesContext';

const Search = ({ tip, sQuery }) => {
    const { movieDiscover, searchInput } = useContext(MoviesContext);

    function handleInputChange(e, value) {
        searchInput(value, tip, sQuery);
    }

    return (
        <Fragment>
            <div className="top-search">
                <Autocomplete
                    className="autocomplete__search"
                    id="searchTrem"
                    freeSolo
                    onInputChange={handleInputChange}
                    options={movieDiscover.map((arrMovie) => arrMovie.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search for a movie..."
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </div>
        </Fragment>
    );
};

Search.displayName = 'Search';
export default Search;
