
/**
 * Language Management
 */

const delay = 1000;

function autoLoadMessage() {
    autoID = window.setInterval(() => {
        if (messageCounter > MAX) {
            window.clearInterval(autoID);
        }
        loadMessage();
    }, delay);
}


function moveDotVertically(spaces) {

    spaces = -spaces;

    const height = graphArea.offsetHeight * .9;
    const half = height / 2;

    return ((half / horizontalLines) * spaces) + "px";
}

function moveDotHorizontally(spaces) {

    const width = graphArea.offsetWidth * 0.38;

    let result = (((width / verticalLines) * spaces)/2)

    let offset = graphArea.offsetWidth * 0.33; 

    return  (result + offset) + "px";
}

function slope(x, excercise) {
    let m = (excercise(x + steps) - excercise(x)) / steps;

    return m;
}

/**
 * Plot Logic
 */
let dots = [];
let graph = [];



function placePoints(points) {
    for (let i = 0; i < points; i++) {

        let container = document.createElement(element);
        container.style.zIndex = zIndex;
        container.classList.add("line-position");
        container.classList.add("origin-vertical");
        container.style.left = 0;

        let dot = document.createElement(element);
        dot.style.width = size;
        dot.style.height = size;
        dot.style.backgroundColor = color;
        dot.classList.add("dot-center");
        dot.classList.add("line-position");
        dot.classList.add("origin-horizontal");

        container.appendChild(dot)
        dots.push(container);
        graphArea.appendChild(container);
    }
}


function MakeGraph(excercise) {
    for (let i = 0; i < 2 * Math.PI; i = i + steps) {

        let container = document.createElement(element);
        container.style.zIndex = zIndex;
        container.classList.add("line-position");
        container.classList.add("origin-vertical");
        container.style.left = 0;

        let dot = document.createElement(element);
        dot.style.width = "3px";
        dot.style.height = "3px";
        dot.style.backgroundColor = color;
        dot.style.position = "relative";
        dot.classList.add("block");
        dot.classList.add("line-position");
        dot.classList.add("origin-horizontal");


        container.style.marginTop = moveDotVertically(isNaN(excercise(i)) ? 100 : excercise(i));
        dot.style.marginLeft = moveDotHorizontally(i);

        // Code for Safari
        dot.style.WebkitTransform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";
        // Code for IE9
        dot.style.msTransform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";
        // Standard syntax
        dot.style.transform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";

        container.appendChild(dot)
        graph.push(container);
        graphArea.appendChild(container);
    }
}


async function MakeGraphSlow(excercise) {
    for (let i = 0; i < 2 * Math.PI; i = i + steps) {

        let container = document.createElement(element);
        container.style.zIndex = zIndex;
        container.classList.add("line-position");
        container.classList.add("origin-vertical");
        container.style.left = 0;

        let dot = document.createElement(element);
        dot.style.width = "3px";
        dot.style.height = "3px";
        dot.style.backgroundColor = color;
        dot.style.position = "relative";
        dot.classList.add("block");
        dot.classList.add("line-position");
        dot.classList.add("origin-horizontal");


        container.style.marginTop = moveDotVertically(isNaN(excercise(i)) ? 100 : excercise(i));
        dot.style.marginLeft = moveDotHorizontally(i);

        // Code for Safari
        dot.style.WebkitTransform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";
        // Code for IE9
        dot.style.msTransform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";
        // Standard syntax
        dot.style.transform = "rotate(-" + Math.atan(slope(i, excercise)) + "deg)";

        container.appendChild(dot)
        graph.push(container);
        graphArea.appendChild(container);
        await sleep(1)
    }
}


function MakeAsymptote(f) {
    for (let i = -3; i < 3; i = i + steps) {

        let container = document.createElement(element);
        container.style.zIndex = zIndex + 1;
        container.classList.add("line-position");
        container.classList.add("origin-vertical");
        container.style.left = 0;

        let dot = document.createElement(element);
        dot.style.width = "3px";
        dot.style.height = "3px";
        dot.style.backgroundColor = asymptote;
        dot.classList.add("block");
        dot.classList.add("line-position");
        dot.classList.add("origin-horizontal");


        container.style.marginTop = moveDotVertically(isNaN(f(i)) ? 100 : f(i));
        dot.style.marginLeft = moveDotHorizontally(i);

        container.appendChild(dot)
        graph.push(container);
        graphArea.appendChild(container);
    }
}

function MakeVerticalAsymptote(x) {

    let container = document.createElement(element);
    container.style.zIndex = zIndex + 1;
    container.classList.add("line-position");
    container.classList.add("origin-vertical");
    container.style.left = 0;

    let dot = document.createElement(element);
    dot.style.width = "3px";
    dot.style.height = (graphArea.offsetHeight + 1000) + "px";
    dot.style.backgroundColor = asymptote;
    dot.classList.add("block");
    dot.classList.add("line-position");
    dot.classList.add("origin-horizontal");

    container.style.marginTop = moveDotVertically(10);
    dot.style.marginLeft = moveDotHorizontally(x);

    container.appendChild(dot)
    graph.push(container);
    graphArea.appendChild(container);
}

function RemoveLastAsymptote(){
    graph.splice(graph.length - 1, 1);
}