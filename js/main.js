function onLearnMoreButtonPressed() {
    const graphBaseUrl = './graph.html?type=';
    const type = getQueryStringType();

    window.location.href = graphBaseUrl + type;
}

function getMainPageGraph() {

    const type = getQueryStringType();

    if (type == null || type == '')
        type = sineKey;

    if (type == sineKey)
        MakeGraph(sineGraph);

    else if (type == cosineKey)
        MakeGraph(cosineGraph);

    else if (type == tangentKey)
        MakeGraph(tangentGraph);

    else if (type == cosecantKey)
        MakeGraph(cosecantGraph);

    else if (type == secantKey)
        MakeGraph(secantGraph);

    else if (type == cotangentKey)
        MakeGraph(cotangentGraph);

    else
        MakeGraph(sineGraph);
}

let btnLearnMore = document.getElementById('learn-more-button');
btnLearnMore.onclick = onLearnMoreButtonPressed;
getMainPageGraph()
