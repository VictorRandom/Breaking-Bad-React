import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
// import {PokemonApi} from './components/api';

function App() {

  
  const getDataCharacters = async (id: any) => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  const getDataEpisodes = async (id: any) => {
    const url = `https://www.breakingbadapi.com/api/episodes`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  const getDataQuotes = async (id: any) => {
    const url = `https://www.breakingbadapi.com/api/quotes`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  const getDataDeath = async (id: any) => {
    const url = `https://www.breakingbadapi.com/api/deaths`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }




  return (
    <>
      <Button className='btn btn-primary' onClick={getDataCharacters}>Characters</Button>
      <Button className='btn btn-primary' onClick={getDataEpisodes}>Episodes</Button>
      <Button className='btn btn-primary' onClick={getDataQuotes}>Falas</Button>
      <Button className='btn btn-primary' onClick={getDataDeath}>Mortes</Button>
    </>
  );
}

export default App;
