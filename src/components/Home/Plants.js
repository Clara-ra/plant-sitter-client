import Plant from './Plant'

const Plants = ( {plants, onClick} ) => {
    return (
        <>
        { plants.map( (plant) => 
        <Plant key={plant._id} plant={plant} onClick={onClick}/>) }
        </>
  )
}

export default Plants