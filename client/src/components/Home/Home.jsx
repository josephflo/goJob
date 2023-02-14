import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = () => {
return(
    <div className='home'>
      <div className='container'>
      <h1 className="title">Trabajadores con experiencia y referencia</h1>
      <h2 className="title_two">Desarrolla tu oficio cerca de ti</h2>
      <SearchBar/>
      </div>
    </div>
)
}

export default Home;