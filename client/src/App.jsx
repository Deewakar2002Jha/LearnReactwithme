import { useState } from 'react'
import movieImg from './assets/max.jpg'
import './App.css'

function App() {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  
)
}

const NetflixSeries = () => {
  const movies = "Dhurandhar";
  const rating = 9.5;
  const description =
    "A mysterious traveler slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within.";
  const returnGenre = () =>{
    const genre = "Action";
    return genre;
  } 
  let age = 16;
  // change the value to check the condition is working of age 
  return (
    <div className='container'>
      <div>
        <img className='img' src={movieImg} alt="movie" width="50%" height="40%" />
      </div>
      
      <h2>Movie name: {movies}</h2>
      <h3>Rating: {rating}</h3>
      <p>{description}</p>
      <p>Genre: {returnGenre()}</p>
      {/* using the ternaery opesartion to check the condition */}
      <button className='btn'>{age >= 18 ? " Watch now" : "Not avaible"}</button>
    </div>
  );
};
export default App