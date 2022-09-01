//
// Daily trafic chart - start
//

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 250};

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [75, 110, 175, 125, 225, 200, 100],
      borderColor: '#7477BF',
      backgroundColor: Utils.transparentize('#7477BF', 0.5),
    }
  ]
};


// Config
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};

// Render chart

const myChart = new Chart(
    document.getElementById('daily-trafic-chart'),
    config
  );

//
// Daily trafic chart - end
//