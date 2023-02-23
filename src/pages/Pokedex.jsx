
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import { paginationLogic } from '../utils/pagination'
import "./style/pokedex.css"
// verificacdo 150

  const Pokedex = () => {
 
  const nameTrainer = useSelector(store => store.nameTrainer)
    const {
      handleSubmit,
      handleChangeSelect,
      types,
      pokemonsInPage,
      handlePreviusPage,
      handleNextPage,
      pagesInBlock,
    } = usePokedex();
   return (
    <main className='pokedex'> 
      <p><span> welcome {nameTrainer}, </span> here  you cacn ind information about your favorite Pokemon</p>
      <form onSubmit={handleSubmit}>
        <div> 
          <input type="text" id="pokemonName" placeholder='search your pokemon'  />
        <button> search</button>
        </div>

        <select onChange={handleChangeSelect}>
          <option  value="">All</option>
          {
            types.map(type => <option key={type.url}>{type.name}</option>)
          }
        </select>
      </form>

      <section className='pokedex_Card rgb'  >
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
       
        }
      </section>
      <section>
        <ul>
          <li onClick={handlePreviusPage}>{"<<"}</li>
          <li onClick={()=>setCurrentPage(1)}>...</li>
        {
            pagesInBlock.map(page => <li onClick={() => setCurrentPage(page)} key={page}>{ page}</li>)
          }
          <li onClick={() => setCurrentPage(lastPage)}>...</li>
          <li onClick={handleNextPage}>{">>"}</li>
        </ul>
      </section>
    </main>
    
    


  )



}

export default Pokedex
