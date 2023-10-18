const ctx = document.getElementById('DECAYCHART');

const decay_chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'dices left',
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
      plugins: {
        zoom: {
            limits: {
              // axis limits
              x: -1
            },
            zoom: {
              // zoom options and/or events
              wheel: {
                enabled: true,
                modifierKey: 'shift'
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          }
      }
    }
});