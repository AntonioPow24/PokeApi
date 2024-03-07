import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home, { loaderPokemons } from '../pages/Home'
import PokemonDetail, { loaderPokemonDetail } from '../pages/PokemonDetail'


export const router = createBrowserRouter([

    {
        path:'/',
        element:<PublicLayout />,
        children:[
            {
                index:true,
                element:<Home />,
                loader:loaderPokemons
            },
            {
                path:'/:name',
                element:<PokemonDetail />,
                loader:loaderPokemonDetail
            }
        ]
    }

])



