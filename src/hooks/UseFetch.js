import { useCallback, useEffect, useState } from "react";




export const UseFetch = (url)=>{

    const [dataPokemon, setDataPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const  getData = useCallback(async ()=>{

        setLoading(true)

        try {

            const res = await fetch(url)

            if(!res.ok) throw new Error('Data no encontrada')

            const pokemon = await res.json()

            setDataPokemon(pokemon)

        } catch (error) {
            setError(error)
            setDataPokemon({})
        } finally{
            setLoading(false)
        }
    },[url])


    useEffect(()=>{
        getData()
    },[getData])

    return {dataPokemon , loading , error}
}