import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'


export default function Home() {

  const  { pokemons }= useLoaderData()
  
  return (
    <>
      {
        pokemons? 

          <>

              <div className="grid grid-cols-auto-fill-200 gap-10 ">

                  {
                    pokemons.results.map( pokemon => 

                      <PokemonCard 
                      
                          key={pokemon.name}
                          rootPokemon={pokemon.url}
                      />
                      )
                  }

                
              </div>

          </>

        : cargando
      }
    </>
  )
}





export const loaderPokemons = async() =>{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')

  if (!res.ok) throw ({
    status:response.status,
    statusText:'No Encontrado'
  })

  const pokemons = await res.json()

  return {pokemons}
}