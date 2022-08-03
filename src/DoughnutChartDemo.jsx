
import React from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChartDemo = () => {
    const chartData = {
        labels: [ 'Other',  'Python', 'Java', 'C/C++'],
        datasets: [
            {
                data: [ 46.38, 28.27, 18.03, 7.32],
                backgroundColor: [
                    "#0000FF",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#0000FF",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        
    )
}
export default  DoughnutChartDemo;                