import React, { useState } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokedex from '../pokedex.json'

function App(){
  const [ pokemon, setPokemon ] = useState([pokedex[0].name, pokedex[0].id, pokedex[0].type])
  const listaPokemon = pokedex;


  function update(pokemon_nuevo) {
    setPokemon(pokemon_nuevo.pokemon)
  }

  const getPokemon = () => {
      if (pokemon[1]?.toString()?.length === 1) return `00${ pokemon[1]}`
      if (pokemon[1]?.toString()?.length === 2) return `0${ pokemon[1]}`
      if (pokemon[1]?.toString()?.length === 3) return `${ pokemon[1]}`
  }

  const getTypes = () => {

    let phrase;
    if(pokemon[2].length === 1) return  pokemon[2][0]
    if(pokemon[2].length > 1) {
     for (let index = 0; index <  pokemon[2].length; index++) {
       if(index === 0) phrase =  pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${ pokemon[2][index]}`
     }
     return phrase
    }

  }

  const getName = () => {
    return  pokemon[0]
  }

  return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ getPokemon()}.png`} alt={ pokemon[0]} />
        <p id="name">{`${ getName()} is a pokemon type ${ getTypes()}`}</p>
      </div>
      <Pokedex updateParent={ update} pokemons={listaPokemon} />
    </div>
    )
}

export default App
