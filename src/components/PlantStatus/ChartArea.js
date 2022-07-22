 import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PlantGraph from "./PlantGraph"
import Spinner from './Spinner/Spinner'

const labels = [ "light", "temperature", "humidity", "moisture" ]
const colors = ["rgb(75, 192, 192)", "rgb(192, 192, 75)", "rgb(192, 75, 192)", "rgb(75, 75, 75)"]

const ChartArea = ( {plant} ) => {
    const [showCharts, setShowCharts] = useState(false)
    const [plantData, setplantData] = useState([])
    const [timestamps, setTimestamps] = useState([])
    const [dataChartOne, setDataChartOne] = useState({
        labels: '',
        datasets: ''
    })
    const [dataChartTwo, setDataChartTwo] = useState({
        labels: '',
        datasets: ''
    })
    const params = useParams()
    const id = params.id.toString()

    const fetchPlantData = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}plant/${id}`)
        const data = res.json()
        return data
    }

    const formatData = () => {
        let t = plantData.map( plant => plant.timestamp )
        setTimestamps(t)
        let [lightDataSet, ...restOfDataSet] = labels.map ( (currentLabel, index) => {
            let dataPoint = {
              label: currentLabel,
              data: plantData.map (plant => plant[currentLabel]),
              fill: false,
              borderColor: colors[index],
              tension: 0.1
            }
            return dataPoint
          })
        setDataChartOne({
            labels: timestamps,
            datasets: restOfDataSet
        })
        setDataChartTwo({
            labels: timestamps,
            datasets: [lightDataSet]
        })
    }

    useEffect( () => {
        const getPlantData = async () => {
            const rawDataPoints = await fetchPlantData()
            setplantData(rawDataPoints)
        }
        getPlantData()
    }, [])

    useEffect( () => {
        if (plantData.length && plantData[0].plant === id) {
            formatData()
            setShowCharts(true)
        }
    }, [plantData])

    const optionsForChartOne = {
        maintainAspectRatio: false,
            scales: { 
              y: {
                min: 0,
                max: 100
              }
            }
    }
    const optionsForChartTwo = {
        maintainAspectRatio: false,
    }

  if(!showCharts) {
    return (
        <Spinner />
    )
  }

  return (
    <div>
        <PlantGraph chartData={dataChartOne} options={optionsForChartOne}/>
        <PlantGraph chartData={dataChartTwo} options={optionsForChartTwo}/>
    </div>
  )
}

export default ChartArea
