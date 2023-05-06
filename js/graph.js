STEPS_LIST = ['']
CURRENT_INDEX = 0;

function onBackButtonPressed() {
    const homeBaseUrl = './index.html?type=';
    const type = getQueryStringType();

    window.location.href = homeBaseUrl + type;
}

function setTitle(value){
    const titleDesk = document.getElementById('title-desktop');
    const titleMobl = document.getElementById('title-mobile');

    titleDesk.innerText = 'Función ' + value;
    titleMobl.innerText = 'Función ' + value;
}

function setInformation(value){
    const informationDesk = document.getElementById('information-desktop');
    const informationMobl = document.getElementById('information-mobile');

    if (CURRENT_INDEX > 0){
        informationDesk.innerHTML = '\n' + value;
        informationMobl.innerHTML = '\n' + value;    
    } else{
        informationDesk.innerHTML = value;
        informationMobl.innerHTML = value;    
    }
}

function getMainPageGraph() {

    const type = getQueryStringType();
    const equationText = document.getElementById('equation-text');

    if (type == null || type == '') {
        type = sineKey;
    }

    if (type == sineKey) {
        equationText.innerText = "\\(f(x) = sin{(x)}\\)"
        setTitle('Seno');
        return sineSteps()
    }

    else if (type == cosineKey) {
        equationText.innerText = "\\(f(x) = cos{(x)}\\)"
        setTitle('Coseno');
        MakeGraph(cosineGraph);
    }

    else if (type == tangentKey) {
        equationText.innerText = "\\(f(x) = tan{(x)}\\)"
        setTitle('Tangente');
        MakeGraph(tangentGraph);
    }

    else if (type == cosecantKey) {
        equationText.innerText = "\\(f(x) = csc{(x)}\\)"
        setTitle('Cosecante');
        MakeGraph(cosecantGraph);
    }

    else if (type == secantKey) {
        equationText.innerText = "\\(f(x) = sec{(x)}\\)"
        setTitle('Secante');
        MakeGraph(secantGraph);
    }

    else if (type == cotangentKey) {
        equationText.innerText = "\\(f(x) = cot{(x)}\\)"
        setTitle('Cotangente');
        MakeGraph(cotangentGraph);
    }

    else {
        equationText.innerText = "\\(f(x) = sin{(x)}\\)"
        setTitle('Seno');
        MakeGraph(sineGraph);
    }
}

async function nextMessage(){
    setInformation(STEPS_LIST[CURRENT_INDEX])
    CURRENT_INDEX++

    if(STEPS_LIST.length == CURRENT_INDEX){
        await MakeGraphSlow(sineGraph);
        CURRENT_INDEX = 0;
    }
}

function setClickAction(){
    const informationDesk = document.getElementById('information-desktop');
    const informationMobl = document.getElementById('information-mobile');

    informationDesk.onclick = nextMessage
    informationMobl.onclick = nextMessage
}


let btnBack = document.getElementById('back-button');
btnBack.onclick = onBackButtonPressed;
STEPS_LIST = getMainPageGraph();
setClickAction();