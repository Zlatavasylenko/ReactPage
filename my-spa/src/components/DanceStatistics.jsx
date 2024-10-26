import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

// Реєстрація компонентів Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const DanceStatistics = ({ data }) => {
  // Налаштування даних для діаграми
  const chartData = {
    labels: data.map(dance => dance.name),
    datasets: [
      {
        label: 'Popularity',
        data: data.map(dance => dance.popularity), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dance Popularity Statistics',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
     
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    layout: {
      padding: 20, 
    },
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <Bar data={chartData} options={options} height={300} width={500} />
    </div>
  );
};

export default DanceStatistics;
