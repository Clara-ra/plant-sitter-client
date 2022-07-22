import { useState, useEffect } from 'react'
import './PlantStatus.css'
import PlantInformation from "./PlantInformation"
import PlantGraph from "./PlantGraph"
import Button from "./Button"
import Edit from "./Edit"
import { useNavigate, useParams } from 'react-router-dom'
import ChartArea from './ChartArea'

const PlantStatus = ({ plant, updatePlant }) => {
  const { id } = useParams()
  const [showEdit, setShowEdit] = useState(false)
  const navigate = useNavigate()

  //grab one plant from the server using the given ID
  const fetchPlant = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}${id}`)
    const data = await res.json()
    console.log(`name: ${data.plantName} location: ${data.location} issue: ${data.issue}`)
    return data
  }

  useEffect(()=> {
    const getPlant = async () => {
      const newPlant = await fetchPlant(id)
      updatePlant(newPlant)
    }
    if ( plant._id === "") {
      getPlant()
    }
  },[])




  return (
    <div className='container'>
        <div className='hero'>
            <PlantInformation plant={plant}/>
            <div>
            <Button onClick={() => setShowEdit(!showEdit)} 
              text={'edit'} color={'grey'} />
            <Button onClick={()=> navigate("/")} 
              text={'back'}/>
            </div>
        </div>
        { showEdit && <Edit plant={ plant } updatePlant={ updatePlant } closeEdit={ ()=> setShowEdit(false) } />}
        <ChartArea plant={ plant }/>
    </div>
  )
}

export default PlantStatus