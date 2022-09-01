
//
// Traffic chart - start
//
const trafficCanvas = document.getElementById('traffic-chart');
// [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500]

const trafficDataArray = {
    hourly: ['31', '52', '41', '83', '62', '72', '52', '75', '93', '62', '104'],
    daily: ['750', '1250', '1500', '2000', '1500', '3000', '1250', '1000', '2250', '1500', '2500'],
    weekly: ['5250', '8750', '14000', '5000', '10500', '12250', '8750', '12600', '15750', '10500', '17500',],
    monthly: ['10000', '38750', '45000', '62000', '46500', '48000', '38750', '55800', '60000', '55000', '77500']
};

const trafficWidgetData = ['5250', '8750', '14000', '5000', '10500', '12250', '8750', '12600', '15750', '10500', '17500',];
const trafficWidgetDataHourly= trafficDataArray.hourly;
const trafficWidgetDataDaily= trafficDataArray.daily;
const trafficWidgetDataweekly= trafficDataArray.weekly;
const trafficWidgetDataMonthly= trafficDataArray.monthly;

let trafficData = {
    labels: [
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
    ],

    datasets: [{
        data: trafficWidgetData,
        borderColor: '#7477BF',
        borderWidth: .3,
        tension: .4,
    }] 
};

let trafficOptions = {
    backgroundColor: 'rgba(116, 119, 191, 0.4',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
            legend: {
              display: false
            }
          }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//
// Change traffic data on click
//

document.addEventListener('click', (e) => {
    const trafficLi = document.querySelectorAll('.traffic-nav-link');
        const buttonClick = e.target;
        if (buttonClick.classList.contains("traffic-nav-link")) {
            console.log(buttonClick.innerHTML);
            // Checks that the target is not already selected
            if (!buttonClick.classList.contains("selected-li")) {
                // Loops through the LI list and removes the class "selected-li"
                for (let i = 0; i < trafficLi.length; i++) {
                    trafficLi[i].classList.remove('selected-li');
                }
                // Adds the class "selected-li to the selected button"
                buttonClick.classList.add('selected-li');
                if (buttonClick.innerHTML == 'Hourly') {
                    addDataToTraffic(trafficWidgetDataHourly);
                    trafficChart.update();
                } else if (buttonClick.innerHTML == 'Daily') {
                    addDataToTraffic(trafficWidgetDataDaily);
                    trafficChart.update();
                } else if (buttonClick.innerHTML == 'Weekly') {
                    addDataToTraffic(trafficWidgetDataweekly);
                    trafficChart.update();
                } else if (buttonClick.innerHTML == 'Monthly') {
                    addDataToTraffic(trafficWidgetDataMonthly);
                    trafficChart.update();
                }
            }
        }

});

// Removes data and adds new data when changing period in the traffic chart. 
function addDataToTraffic(arr) {
    for (let i = 0; i < arr.length; i++) {
        trafficWidgetData.push(arr[i]);
        trafficWidgetData.shift();
    }
}

//
// Daily chart
//

const dailyCanvas = document.getElementById('daily-chart');


let dailyData = {
    labels: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S',],
    datasets: [{
        label: '# of Hits',
        data: [75, 110, 175, 125, 225, 200, 100],
        borderColor: '#7477BF',
        backgroundColor: '#7477BF',
        borderWidth: 1
    }] 
};

let dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
         }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//
// Daily chart
//

const mobileCanvas = document.getElementById('mobile-chart');


let mobileData = {
    labels: [ 'Desktop', 'Tablet', 'Mobile'],
    datasets: [{
        label: '# of Users',
        data: [2000,550, 500],
        borderWidth: 1,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51b6C8'
        ]

    }] 
};

let mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
         }
        }
    };

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
    });


// // Used to calculate the data hourly, weekly and monthly data
// const daily = ['750', '1250', '1000', '2000', '1500', '1750', '1250', '1800', '2250', '1500', '2500'];

// function calculateData(number) {
//     const newArray = [];
//     for (let i = 0; i < daily.length; i++) {
//         let newNumber = daily[i] * number;
//         newNumber = Math.floor(newNumber);
//         newArray.push(newNumber);
//     }
//     console.log(newArray);
// }