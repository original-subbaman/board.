"use client";
import {
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

const data = {
  labels: [
    'Basic Tees',
    'Super Hoodies',
    'Custom Short Pants'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 200, 200],
    backgroundColor: [
      'rgba(152, 216, 158, 1)',
      'rgba(238, 132, 132, 1)',
      'rgba(246, 220, 125, 1)',
    ],
    hoverOffset: 4
  }]
};

const config: any = {
  plugins:{
    legend:{
      display: false,
    },
    tooltips: {
      enabled: false, 
    }
  }

};

const DoughnutChart = () => {
    return <div className='w-36 h-36'>
      <Doughnut data={data} options={config} width={"150px"} />
    </div>
}

export default DoughnutChart;