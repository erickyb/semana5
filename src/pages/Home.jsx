import React from 'react'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import { useDispatch } from 'react-redux';

const Home = () => {
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    //para que no se recargue la pagima (e)=>{e.preventDefault(); }
  //solo se actualiza dentro de ella
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value 
    dispatch(setNameTrainerGlobal(nameTrainer));
  };
  return (
    <main>  
      <section>
        <div>
           <img src="/imagen/pokedex.png " alt="imagen_inicio" />
        </div>  
         <h2>Hello Trainer!</h2>
        <p>Give me your name to Start! </p>
        <form onSubmit={handleSubmit}>
          <input id="nameTrainer" type="text" placeholder='your name...'/>
          <button>Start!</button>
        </form>
      </section>
   </main>
  )
}

export default Home
