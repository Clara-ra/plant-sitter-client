import { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import PlantStatus from './components/PlantStatus/PlantStatus'
import {  Routes, Route, useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  const [plants, updatePlants] = useState( [])

  const [ seePlant, setSeePlant ] = useState(
    {
      _id: '',
      plantName: '',
      location: '',
      issue: ''
  })

  useEffect( () => {
    const getPlants = async () => {
      const plantsFromServer = await fetchPlants()
      updatePlants(plantsFromServer)
    }

    getPlants()
  }, [seePlant])

  //grab plants from the server
  const fetchPlants = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`)
    const data = await res.json()
    return data
  }

  //go to a clicked plant
  const goToPlant = (plant) => {
    setSeePlant(plant)
    navigate(`/plant/${plant._id}`)
    console.log('clicked Plant', plant)
  }

  return (
  <>
  <Routes>
      <Route path='/' exact element={
        <Home plants={plants} goToPlant={goToPlant}/>
      } />
      <Route path='/plant/:id'element={
        <PlantStatus plant={seePlant} updatePlant={setSeePlant}/>
      } />

  </Routes>
  </>
  );
}

export default App;
 