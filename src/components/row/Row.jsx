import React, { useState } from 'react'
import { useEffect } from 'react';
import instance from '../../api/axios';
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const BASE_URL='https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetchData()
    },)

    const fetchData = async()=>{
        const result = await instance.get(fetchUrl);
        setMovies(result.data.results);
    }
    
  return (
    <div className='row'>
        <h1 className='title'>{title}</h1>
        <div className="row__posters">
        {movies.map((movie) => (
            <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}/>
        ))}
        </div>
        
    </div>
  )
}

export default Row