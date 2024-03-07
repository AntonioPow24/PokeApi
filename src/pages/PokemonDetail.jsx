import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'



export default function PokemonDetail() {

  const {pokemon} = useLoaderData()

  console.log(pokemon);
  return (
    <>
      {pokemon && 

        <>
          <div className=' flex gap-10 max-w-screen-md m-auto flex-col items-center'>

            <div className="flex gap-10 lg:flex-col">
              <div className="p-2 min-w-60 max-w-80">
                <img src={`${pokemon.sprites.other.dream_world.front_default}`} alt="" className="w-full " />
              </div>
              <div className="flex-1 flex justify-center items-start flex-col gap-2">
                <p className='text-xl text-slate-200' >Nombre: {pokemon.name}</p>
                <p className='text-xl text-slate-200'>Altura: {pokemon.height}m</p>
                <p className='text-xl text-slate-200'>Peso: {pokemon.weight}kg</p>
                <p className='text-xl text-slate-200'>Experiencia Base: {pokemon.base_experience} xp</p>
              </div>
            </div>
              <Link to='/' className='bg-green-700 px-10 py-2 rounded-md text-purple-100 font-bold'>Volver al Home</Link>
          </div>

          
        </>
      }
    </>
  )
}




export const loaderPokemonDetail = async({params})=>{
  

   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)

   if (!res.ok) throw ({
    status:response.status,
    statusText:'No Encontrado'
  })

  const pokemon = await res.json()

  return {pokemon}
}