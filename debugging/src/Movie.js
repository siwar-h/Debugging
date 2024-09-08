import React from 'react';


const Movie = ({ movie }) => {
  return (
    <div>
      
        title: {movie.title} <br/>
        description:  {movie.description}<br/>
         
      
    </div>
  );
};

export default Movie;