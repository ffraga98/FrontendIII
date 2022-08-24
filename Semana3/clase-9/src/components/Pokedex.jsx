import React from 'react'
import styles from '../styles/Pokedex.module.css'

function Pokedex(props){

    return (
        <div className={styles.pokeContainer}>
            <h3>POKEDEX</h3>
            <div className={styles.pokeList}>
                {props.pokemons.map((pokemon, index) => (
                    <p key={index} onClick={() => props.updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type]})} className={styles.pokeOption}>{pokemon.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Pokedex
