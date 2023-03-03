// Graph location
const graphArea = document.getElementById("graph-area");

// Graph Configurations
const element = "DIV";
const axisColor = "#BFFFFFFF";
const lines = "#D9FAFAFA";
const fullSize = "100%";
const axisThickness = "2px"
const thickness = "1px";
const verticalLines = 3;
const horizontalLines = 3;


// Create x-axis
let xAxis = document.createElement(element);
xAxis.style.width = fullSize;
xAxis.style.height = axisThickness;
xAxis.style.backgroundColor = axisColor;
xAxis.style.zIndex = 2;
xAxis.classList.add("line-position");
xAxis.classList.add("origin-vertical");

// Create y-axis
let yAxis = document.createElement(element);
yAxis.style.width = axisThickness;
yAxis.style.height = fullSize;
yAxis.style.backgroundColor = axisColor;
yAxis.style.zIndex = 2;
yAxis.classList.add("line-position");
yAxis.classList.add("origin-horizontal");

// Add axis to plane
graphArea.appendChild(xAxis);
graphArea.appendChild(yAxis);

// Add vertical lines
for (let i = -verticalLines; i < verticalLines + 1; i++) {

    if (i != 0) {
        let vertical = document.createElement(element);
        vertical.classList.add("line-position");
        vertical.style.width = thickness;
        vertical.style.height = fullSize;
        vertical.style.backgroundColor = lines;
        vertical.classList.add("origin-horizontal");
        vertical.style.top = 0;

        vertical.style.marginLeft = horizontalMove(i);
        graphArea.appendChild(vertical);
    }

}

// Add horizontal lines
for (let i = -horizontalLines; i < horizontalLines + 1; i++) {

    if (i != 0) {
        let horizontal = document.createElement(element);
        horizontal.classList.add("line-position");
        horizontal.style.width = fullSize;
        horizontal.style.height = thickness;
        horizontal.style.backgroundColor = lines;
        horizontal.classList.add("origin-vertical");
        horizontal.style.left = 0;

        horizontal.style.marginTop = verticalMove(i);
        graphArea.appendChild(horizontal);
    }

}




// Add vertical lines
for (let i = -verticalLines; i < verticalLines + 1; i++) {

    if (i != 0) {
        let vertical = document.createElement("LABEL");
        vertical.classList.add("line-position");
        vertical.classList.add("origin-horizontal");
        vertical.classList.add("white-text");
        vertical.classList.add("small-text");
        vertical.style.top = "51%";
        vertical.innerHTML = getRadian(i);

        vertical.style.marginLeft = horizontalMove(i);
        graphArea.appendChild(vertical);
    }

}

// Add horizontal lines
for (let i = -horizontalLines; i < horizontalLines + 1; i++) {

    if (i != 0) {
        let horizontal = document.createElement("LABEL");
        horizontal.classList.add("line-position");
        horizontal.classList.add("origin-vertical");
        horizontal.classList.add("white-text");
        horizontal.classList.add("small-text");
        horizontal.style.left = "53%";
        horizontal.innerHTML = -i;

        horizontal.style.marginTop = verticalMove(i);
        graphArea.appendChild(horizontal);
    }

}


function getRadian(i){
    if(i % 2 == 0){
        let half = i/2;
        return half + "π";
    } else{
        return i + "π/2";
    }
}

// Return pixels to move horizontally
function horizontalMove(index) {

    const width = graphArea.offsetWidth * .9;
    const half = width / 2;

    return ((half / verticalLines) * index) + "px";
}

// Return pixels to move vertically
function verticalMove(index) {

    const height = graphArea.offsetHeight * .9;
    const half = height / 2;

    return ((half / horizontalLines) * index) + "px";
}