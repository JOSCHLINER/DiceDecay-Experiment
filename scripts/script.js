
function decayanalysis()  {
    let tid = Number(document.getElementById("tid").value);
    let sides = Number(Math.abs(document.getElementById("sides").value));
    let amountdices = Number(document.getElementById("dices").value);

    const dices = new dice(tid, amountdices, sides);
    let data = dices.getdata();

    decay_chart.data.datasets[0].data = data;
    decay_chart.data.labels = Array.from(data, (values, i) => i);
    
    decay_chart.update();
}


function dicethrow()    {
    let tid = 1
    let sides = Number(document.getElementById("sides").value);
    let amountdices = Number(document.getElementById("dices").value);
    console.log(amountdices);

    const dices = new dice(tid, amountdices, sides);
    let data = dices.count();

    amount_chart.data.datasets[0].data = data;
    amount_chart.data.labels = Array.from(data, (values, i) => i + 1);
    
    amount_chart.update();
}

function resetZoomChart(chart)  {
    chart.resetZoom();
}