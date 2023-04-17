function onBackButtonPressed() {
    const homeBaseUrl = './index.html?type=';
    const type = getQueryStringType();

    window.location.href = homeBaseUrl + type;
}

function getMainPageGraph() {

    const type = getQueryStringType();
    const equationText = document.getElementById('equation-text');

    if (type == null || type == '') {
        type = sineKey;
    }

    if (type == sineKey) {
        equationText.innerText = "\\(f(x) = sin{(x)}\\)"
        MakeGraph(sineGraph);
    }

    else if (type == cosineKey) {
        equationText.innerText = "\\(f(x) = cos{(x)}\\)"
        MakeGraph(cosineGraph);
    }

    else if (type == tangentKey) {
        equationText.innerText = "\\(f(x) = tan{(x)}\\)"
        MakeGraph(tangentGraph);
    }

    else if (type == cosecantKey) {
        equationText.innerText = "\\(f(x) = csc{(x)}\\)"
        MakeGraph(cosecantGraph);
    }

    else if (type == secantKey) {
        equationText.innerText = "\\(f(x) = sec{(x)}\\)"
        MakeGraph(secantGraph);
    }

    else if (type == cotangentKey) {
        equationText.innerText = "\\(f(x) = cot{(x)}\\)"
        MakeGraph(cotangentGraph);
    }

    else {
        equationText.innerText = "\\(f(x) = sin{(x)}\\)"
        MakeGraph(sineGraph);
    }
}

let btnBack = document.getElementById('back-button');
btnBack.onclick = onBackButtonPressed;
getMainPageGraph();