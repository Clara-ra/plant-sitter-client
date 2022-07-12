import './Home.css'
import Header from './Header'
import Plants from './Plants'
import React from 'react'

function Home( {plants, goToPlant} ) {
  return (
    <div className="container">
      <Header />
      <Plants plants={plants} onClick={goToPlant}/>
    </div>
  );
}

export default Home

 