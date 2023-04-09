function onLearnMoreButtonPressed() {
    const graphBaseUrl = './graph.html?type=';
    const type = getQueryStringType();

    window.location.href = graphBaseUrl + type;
}

let btnLearnMore = document.getElementById('learn-more-button');
btnLearnMore.onclick = onLearnMoreButtonPressed;