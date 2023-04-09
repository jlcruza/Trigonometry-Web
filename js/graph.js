function onBackButtonPressed() {
    const homeBaseUrl = './index.html?type=';
    const type = getQueryStringType();

    window.location.href = homeBaseUrl + type;
}

let btnBack = document.getElementById('back-button');
btnBack.onclick = onBackButtonPressed;