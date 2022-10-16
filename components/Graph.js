import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

const randomPoints = [
    [65, 59, 100, 80 , 91, 95, 49, 39, 54, 42, 22],
    [10, 30, 45, 54 , 90, 77, 89, 56, 66 ,77, 97],
    [100, 38, 49, 54 , 50, 87, 89, 50, 96 ,57, 27],
    [19, 70, 48, 57 , 99, 27, 69, 66, 54 ,27, 87],
    [90, 30, 43, 59 , 89, 47, 69, 51, 86 ,37, 57],

]

const getRandomPoints = () =>{
    const randInt = Math.floor(Math.random()*4) + 1
    return randomPoints[randInt]
}

const data = {
    labels:[
        '12:15 PM',
        '3:15 PM',
        '6:15 PM',
        '9:15 PM',
        '12:15 AM',
        '3:15 AM',
        '6:15 AM',
        '9:15 AM'
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: getRandomPoints(),
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

const Graph = () => {
    return (
        <Line data={data} options={options} width={400} height={150} />
    )
}
export default Graph