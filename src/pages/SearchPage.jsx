import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { PokemonCard } from '../components'

export const SearchPage = () => {
    const location = useLocation()
    console.log(location)

    const { globalPokemons } = useContext(PokemonContext)

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
    console.log(filteredPokemons)

    return (
        <div className="container">
            <p className="p-search">
                Se encontraron <span>{filteredPokemons.length}</span> resultados:
            </p>
            <div className="card-list-pokemon container">
                {filteredPokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} ket={pokemon.id} />

                ))}
            </div>
        </div>
    )
}
