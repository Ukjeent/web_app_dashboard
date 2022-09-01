

//
// Trafic chart - start
//

const labels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31'
  ];

  const dataValuesHoury = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500];
  const dataValuesDaily = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500];
  const dataValuesWeekly = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500];
  const dataValuesMonthly = [200, 500, 11000];

  const dataValues = dataValuesHoury;

  const data = {
    labels: labels,
    datasets: [{
      label: 'Hourly',
      data: dataValues,
      fill: {
       target: 'origin',
       above: 'rgba(116, 119, 191, 0.4',  
     },
      borderColor: '#7477BF',
      borderWidth: .3, 
      tension: .4
    }]
  };


  // Config
  const config = {
    type: 'line',
    data: data,
    animation: {
      duration: 0
      },
      aspectRatio: 2.5,
      scales: {
        y: {
        beginAtZero: true
        }
        },
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

// Render chart
const myChart = new Chart(
    document.getElementById('traffic-chart'),
    config
  );

//
// Trafic chart - end
//

