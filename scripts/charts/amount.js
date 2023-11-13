function define() {

    let ctx = document.getElementById('AMOUNTCHART');

    let amount_chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'times rolled ',
                data: [],
                fill: true,
                backgroundColor: ['rgb(54, 162, 235, 0.7)', 'rgb(255, 99, 132, 0.7)', 'rgb(75, 192, 192, 0.7)', 'rgb(255, 159, 64, 0.7)', 'rgb(153, 102, 255, 0.7)', 'rgb(255, 205, 86, 0.7)'],
                borderColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 159, 64)', 'rgb(153, 102, 255)', 'rgb(255, 205, 86)'],
                borderWidth: 3,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    return amount_chart
}