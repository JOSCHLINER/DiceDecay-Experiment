
function decayanalysis()  {
    let time = get_input("tid");
    let sides = get_input("sides");
    let amountdices = get_input("dices")

    const dices = new dice(amountdices, sides, time);
    let data = dices.getdata();

    edit_graph(decay_chart, data);
}

function dicethrow()    {
    let sides = get_input("sides");
    let amountdices = get_input("dices");

    const dices = new dice(amountdices, sides);
    let data = dices.count();

    edit_graph(amount_chart, data);
}

function resetZoomChart(chart)  {
    chart.resetZoom();
}

function copy(graph) {
    let graphdata = graph.data.datasets[0].data;
    if (graphdata.length > 10)    {
        if (confirm('The to be copied data can be very large are you sure you want to continue?') == false)  {
            return false;
        }
    }
    let prepared_data = graphdata.join('	');

    let cp_element = document.createElement('input');
    cp_element.setAttribute('value', prepared_data);
    document.body.appendChild(cp_element);

    cp_element.select();
    document.execCommand('copy');

    cp_element.parentNode.removeChild(cp_element);
}

function edit_graph(graph, data, labeltemplate = "")  {
    let label = Array.from(data, (values, i) => labeltemplate + (i + 1));

    graph.data.datasets[0].data = data;
    graph.data.labels = label;

    graph.update();
}

function get_input(id)    {
    let data = document.getElementById(id).value;
    return parseInt(data);
}   

// function to toggle the .animation class of a element('s)
function toggleAnimation(element) {
    let toggleElements = document.querySelectorAll(element);
    
    toggleElements.forEach(element => {
        element.classList.add('animation');

        element.addEventListener("animationend", () => {
            element.classList.remove('animation');
        });
    });
}