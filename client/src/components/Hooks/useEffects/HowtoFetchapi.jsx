import React, { useEffect, useState } from 'react';
import './HowtoFetchapi.css';

const HowtoFetchapi = () => {
    const [pokemon, setpokemon] = useState(null);

    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    //using ascync await api
    // const fetchPokemon = async () => {
    //     try {
    //         const res = await fetch(API);
    //         const data = await res.json();
    //         setPokemon(data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setError(error);
    //         setLoading(false);
    //     }
    // };
    // using promoise api
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setpokemon(data))
            .catch(err => console.error(err));
    }, []);

    if (!pokemon) {
        return <p className="text-center mt-10 text-lg">Loading...</p>;
    }

    return (
        <section className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-6">

            {/* Header */}
            <h1 className="text-4xl font-bold mb-10">
                Lets Catch Pokémon
            </h1>

            {/* Card */}
            <ul className="flex justify-center">
                <li className="group relative w-80 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">

                    {/* Green oval background */}
                    <div className="absolute -top-16 -left-10 w-[400px] h-[180px] bg-green-200 rounded-full transition-all duration-500 group-hover:-top-10 group-hover:-left-6 group-hover:bg-green-300"></div>

                    {/* Content */}
                    <figure className="relative z-10 flex flex-col items-center justify-center h-full">

                        <img
                            src={
                                pokemon.sprites.other.dream_world.front_default ||
                                pokemon.sprites.front_default
                            }
                            alt={pokemon.name}
                            className="w-28 mb-3 transition-transform duration-300 group-hover:scale-110"
                        />

                        <h2 className="text-center font-bold text-xl capitalize tracking-wide mb-1">
                            {pokemon.name}
                        </h2>

                        {/* Stats in one row (like first image) */}
                        <div className="grid grid-cols-3 gap-4 mt-2 text-center text-sm text-gray-700">
                            <p>Height: {pokemon.height}</p>
                            <p>Weight: {pokemon.weight}</p>
                            <p>Speed: {pokemon.stats[5].base_stat}</p>
                        </div>

                    </figure>
                </li>
            </ul>
        </section>
    );
};

export default HowtoFetchapi;