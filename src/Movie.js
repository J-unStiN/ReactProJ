import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';



function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie"> 
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" className="Movie_Poster" />
    )
}

function MovieGenre({genre}) {
    return(
    <span className="Movie_Genre">{genre}</span>
    )
}



Movie.protoType = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.protoType = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie;