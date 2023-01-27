import React from 'react'
import Request from '../../api/tmdbApi'
import Banner from '../../components/banner/Banner'
import Nav from '../../components/navBar/Nav'
import Row from '../../components/row/Row'
import "./Home.css"

function Home() {
  return (
    <div className='homeContainer'>
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINAL" fetchUrl={Request.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={Request.fetchDocumentMovies}/>
        
    </div>

  )
}

export default Home