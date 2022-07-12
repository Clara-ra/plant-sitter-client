import './PlantStatus.css'
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Button from './Button'

const Edit = ( { plant, updatePlant, closeEdit }) => {
    const [form, setForm] = useState({
        plantName: plant.plantName,
        location: plant.location
    })
    const params = useParams()
    const navigate = useNavigate()

    //update the form as the user types in stuff
    const updateForm = (value) => {
        return setForm( (prev) => {
            return {...prev, ...value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault()
        const editedPlant = {
            plantName: form.plantName,
            location: form.location
        }
        console.log(editedPlant)
        // send the request
        const id = params.id.toString()
        await fetch(`https://plant-monitor-22.herokuapp.com/editPlant/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedPlant),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        updatePlant({
            _id: plant._id,
            plantName: editedPlant.plantName,
            location: editedPlant.location,
            issue: plant.issue
        })
        closeEdit()
    }
    
  return (
    <div>
        <h1>Edit Plant Information</h1>
        <form onSubmit={onSubmit}>
            <div className="edit-form">
                <div className="form-control">
                    <label htmlFor="name">Plant Name </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.plantName}
                        onChange={(e) => updateForm({ plantName: e.target.value })}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="location">Location </label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={form.location}
                        onChange={(e) => updateForm({ location: e.target.value })}
                    />
                </div>
                <div className="form-control">
                    <div className="btn-options">
                    <input
                        type="submit"
                        value="Update Plant"
                        className="btn"
                    />
                    < Button onClick={ closeEdit } text={'Cancel'} />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Edit