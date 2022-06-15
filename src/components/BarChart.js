import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div className='grouped'>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'Cost',
              data: [12, 19, 3, 5, 2],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'Profit',
              data: [18, 19, 13, 15, 12],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor:'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Expense',
              data: [8, 12, 13, 7, 8],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
            },
            {
              label: 'Revenue',
              data: [15, 16, 15, 18, 19],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
