
function calculate()  {
    let tid = Number(document.getElementById("tid").value);
    let sides = Number(Math.abs(document.getElementById("sidor").value));
    let tarningar = Number(document.getElementById("tarningar").value);

    const slump = new dice(tid, tarningar, sides);

    let data = slump.getdata();
    updateData(data);
}

function resetZoomChart(chart)  {
    chart.resetZoom();
}

function updateData(data)   {
    decay_chart.data.datasets[0].data = data;
    decay_chart.data.labels = Array.from(data, (values, i) => i);
    
    decay_chart.update();
}