import React, {useState, useEffect} from 'react';

import './App.css';
import Header from './components/header/index.js';
import Search from './components/search/index.js';
import MovieList from './components/movie/list.js';

import axios from "axios";

async function getMovieList(search) {
  const url = !search ? 'https://www.omdbapi.com/?s=man&apikey=4a3b711b' : `https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`;

  console.info('url', url);
  const res = await axios.get(url);
  return res.data.Search;
}

function App() {
  const [input,
    setInput] = useState('');
  const [movieList,
    setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((data) => {
      setMovieList(data);
    });
  }, []);

  const searchMovie = async() => {
    const data = await getMovieList(input);
    setMovieList(data);
  }

  return (
    <div className="App">
      <Header></Header>
      <Search value={input} onChange={(event) => setInput(event.target.value)} onClick={searchMovie}></Search>
      <MovieList data={movieList}></MovieList>
    </div>
  );
}

export default App;
