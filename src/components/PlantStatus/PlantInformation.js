

const PlantInformation = ( {plant} ) => {
   const getPlant = () => {
      let tempObj = 
      {  
        id: '',
        plantName: 'loading...',
        location: '',
        issue: ''
      }
      return tempObj 
    }
  const plantHeader = plant._id === "" ? getPlant() : plant

  return (
    <div className="header">
        <h1>{plantHeader.plantName}</h1>
        <h3 className="location">{plantHeader.location}</h3>
        <h3 className="issue">{plantHeader.issue}</h3>
    </div>
  )
}

export default PlantInformation