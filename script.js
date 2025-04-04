

// Apex Charts
let options = {
    series: [3.25, 0.44, 1.16, 4.73],
    labels: ['Canadian television production', 'Canadian theatrical feature film production', 'Broadcaster in-house production (Canadian)', 'Foreign location and service production'],
    chart: {
        type: 'donut'
    },
    colors: ['#184789', '#576ca3', '#929cc4', '#9d9fa2'], // Custom colors for slices
    legend: {
        position: 'right' // Default: on larger screens, legend is on the right
    },
    responsive: [{
        breakpoint: 768, // When screen width is 768px or smaller
        options: {
            legend: {
                position: 'bottom' // Move labels below the chart
            }
        }
    }],
    dataLabels: {
        dropShadow: {
            enabled: false,
        }
    },
    plotOptions: {
        pie: {
            donut: {
                size: '45%'
            }
        }
    },
    annotations: {
        position: 'front',
        y: 0,
        x: 0,
        offsetX: 0,
        offsetY: 0,
        text: 'Total: 157', // Add the total value here
        style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
        }
    },

}

let chart = new ApexCharts(document.querySelector("#chart1"), options);


chart.render();



// Google Charts

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Canadian television production', 2],
        ['Canadian theatrical feature film production', 2],
        ['Broadcaster in-house production (Canadian)', 2],
        ['Foreign location and service production', 7]
    ]);

    var options = {
        title: 'Total film and television production in Canada',
        pieHole: 0.4,
        colors: ['#184789', '#576ca3', '#929cc4', '#9d9fa2'], // Custom colors for slices
        // Change background colour to bootstrap's class of 'bg-light'
        backgroundColor: '#f8f9fa',
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}