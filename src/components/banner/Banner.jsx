import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
import Request from '../../api/tmdbApi';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await instance.get(Request.fetchNetflixOriginals);
    setMovie(
      result.data.results[
        Math.floor(Math.random() * result.data.results.length - 1)
      ]
    );
  };

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{
        background: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner_title'>{movie?.name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 250)}</h1>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  );
}

export default Banner;
