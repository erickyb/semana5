import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import "./style/pokemon.css"
import PokemonCard from '../components/pokedex/PokemonCard';
import "../components/pokedex/style/pokemonCard.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();
  
  const getPercentBar = (stat) => {
    const porcent = (stat * 100) / 255;
    // console.log(porcent)
    return `${porcent}%`
  };
  
  const handleClickPokemon = () => {
    Navigate(`/pokedex/${pokemon.id}`)
  }
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
    
  }, []);

  return (<main >
    { /*parte superior*/}
    <div style={{ padding: "0" }} className={`pokemon__contenedor1 pokemonCard1`} onClick={handleClickPokemon} >
      <div className={`pokemon__encabezado pokemonCar__header1 bg-lg-${pokemon?.types[0].type.name}`}>
      <div className='pokemon__contenedor-cuerpo'>
        <section className='pokemon__contenedor-card'>
            <img className="pokemon__img " src = {pokemon?.sprites.other["official-artwork"].front_default}
              alt="" />
        </section>
     
      { /*Body*/}

      <section className='pokemon__body' >
            <section className='pokemon__contenedor'>
           
              <h2 className='id'  ># {pokemon?.id}</h2>
              <h2 className='name name-pokemom'>{pokemon?.name}</h2>
              
       
              <h5 className='Wight'>Wight: {pokemon?.weight}</h5>
              <h5 className='Height'>Height: {pokemon?.height}</h5>

              
              <h3 className='type'>type</h3>
              <div className='type1'>
              {
                  pokemon?.types.map(type => <div key={type.type.name}><span>{type.type.name}</span></div>)
              }
             </div>
         
              <h3 className='Habi'>Habilidades</h3>
              <div className='Habi1'>
              {
                  pokemon?.abilities.map(ability => <div key={ability.ability.name}><span>{ability.ability.name}</span></div>)
              }
              </div>     
            </section>
            


        <section className='pokemon__stats tabla '>
          <h2 className='pokemon__title'>Stats</h2>
          <section className='pokemon__stats-info'>
            {
              pokemon?.stats.map(stat => (
                <article className='pokemon__stat' key={stat.stat.name} >
                  <div className='pokemon__stat-header'>
                    <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                    <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                  </div>
                  <div className='pokemon__stat-bar'>
                    <div className='pokemon__stat-barGray'>
                      <div className="pokemon__stat-barProgress" style={{ width: getPercentBar(stat.base_stat) }} ></div>
                    </div>
                  </div>
                </article>
              ))
            }
          </section>

        </section>

        </section>
      </div>
     </div>
    </div>
   </main>
  )
}

export default Pokemon