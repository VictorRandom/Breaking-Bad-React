import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import {PokemonApi} from './components/api';

function App() {

  const headers = {
    'Accept': 'application/json',
    
  }
  
  const getData = async (id: any) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/1`
    const url = `https://the-one-api.dev/v2/character`;
    const res = await fetch(url, {headers: headers})
    const data = await res.json()
    console.log(data)
  }


  return (
    <>
      <Button className='btn btn-primary' onClick={getData}>teste</Button>
    </>
  );
}

export default App;
