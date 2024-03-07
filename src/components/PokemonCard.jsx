import React from 'react'
import { UseFetch } from '../hooks/UseFetch'

import '../styles/loading.css'
import { Link } from 'react-router-dom';

export default function PokemonCard({rootPokemon}) {


  const {dataPokemon , loading , error} = UseFetch(rootPokemon)

 

  return (
    <>
      {

        loading? 
          <>
            <div className="loadingio-spinner-spinner-zj4ocfk8ac"><div className="ldio-wuamyig8bl">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
          </>
        :error? <p>{error}</p>

        : dataPokemon &&
        <>  
          <Link  to={`/${dataPokemon.name}`} className="bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500  px-5 py-3 rounded-xl hover:from-pink-500 hover:to-yellow-500  flex flex-col items-center justify-center">
              <div className="w-full h-60 flex items-center justify-center">
                  <img className='object-contain ' src={`${dataPokemon.sprites.other.dream_world.front_default}`} alt="" />
              </div>

              <h3 className='text-2xl capitalize font-medium' >{dataPokemon.name}</h3>
          </Link>
        </>

      

      }
    </>
  )
}
