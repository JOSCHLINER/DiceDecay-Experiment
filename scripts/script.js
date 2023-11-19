
/* Chart Definition*/
const amount_chart = definegraph();


/* Event Listeners*/
const copybutton = document.querySelector('.copy');
copybutton.addEventListener("click", function () { copy(amount_chart) });
copybutton.addEventListener("click", function () { toggleAnimation('.clip_svg') });

const calculate = document.querySelector('#input_calcbutton');
calculate.addEventListener("click", dicethrow);

// theme toggler
const darkreader = document.querySelector('#toggleTheme');
const themeIcon = document.querySelector('#ThemeIcon')
darkreader.addEventListener("click", function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (themeIcon.alt == "Lightmode Icon") {
        themeIcon.src = "images/dark_mode.svg";
        themeIcon.alt = "Darkmode Icon";
    } else {
        themeIcon.src = "images/light_mode.svg";
        themeIcon.alt = "Lightmode Icon";
    }
});

/* Default Theme Setter*/
if (window.matchMedia) {
    // if user prefers dark color scheme, light is default
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        themeIcon.src = "images/light_mode.svg";
        themeIcon.alt = "Lightmode Icon";
    }
}


/* Functions */
function decayanalysis() {
    let time = get_input("tid");
    let sides = get_input("sides");
    let amountdices = get_input("dices")

    const dices = new dice(amountdices, sides, time);
    let data = dices.getdata();

    edit_graph(decay_chart, data);
}

function dicethrow() {
    let sides = get_input("sides");
    let amountdices = get_input("dices");

    const dices = new dice(amountdices, sides);
    let data = dices.count();

    edit_graph(amount_chart, data);
}

function resetZoomChart(chart) {
    chart.resetZoom();
}

function copy(graph) {
    let graphdata = graph.data.datasets[0].data;
    if (graphdata.length > 25) {
        if (confirm('The to be copied data can be very large are you sure you want to continue?') == false) {
            return false;
        }
    }
    // let prepared_data = graphdata

    let lineArray = graphdata.join('	');
    console.log(lineArray)

    let cp_element = document.createElement('input');
    cp_element.setAttribute('value', lineArray);
    document.body.appendChild(cp_element);

    cp_element.select();
    document.execCommand('copy');

    cp_element.parentNode.removeChild(cp_element);
}

function edit_graph(graph, data, labeltemplate = "") {
    let label = Array.from(data, (values, i) => labeltemplate + (i + 1));

    graph.data.datasets[0].data = data;
    graph.data.labels = label;

    graph.update();
}

function get_input(id) {
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

