const Plant = ( { plant, onClick } ) => {
  return (
    <div className={`plant ${plant.issue ? 'warning' : ''}`} 
    onClick={() => onClick(plant)}>
        <h3>{plant.plantName}</h3>
        <div className='plant-info'>
            <p>{plant.location}</p>
            <p className='issue'>{plant.issue}</p>
        </div>

    </div>
  )
}

export default Plant