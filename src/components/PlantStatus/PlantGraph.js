import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const PlantGraph = ( {chartData, options} ) => {

  return (
    <div>
      <Line       
        data={ chartData }
        height={400}
        width={400}
        options={ options }
      />
    </div>
  )
}

export default PlantGraph