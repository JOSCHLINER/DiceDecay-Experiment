const ctx = document.getElementById('AMOUNTCHART');

const amount_chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'times rolled: ',
        data: [],
        fill: true,
        borderColor: 'rgb(0, 52, 89)',
        backgroundColor: 'rgb(0, 126, 167, 0.1)',
        borderWidth: 1.75
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins: {}
    }
});