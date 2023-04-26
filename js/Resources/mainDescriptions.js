function sineInformation() {
    return {
        name: 'Seno',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function cosineInformation() {
    return {
        name: 'Coseno',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function tangentInformation() {
    return {
        name: 'Tangente',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function cosecantInformation() {
    return {
        name: 'Cosecante',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function secantInformation() {
    return {
        name: 'Secante',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function cotangentInformation() {
    return {
        name: 'Cotangente',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus. Vitae justo eget magna' +
            ' fermentum iaculis eu. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt' +
            ' arcu non sodales neque. Consectetur purus ut faucibus pulvinar elementum integer. Facilisi etiam dignissim' +
            ' diam quis enim lobortis scelerisque fermentum.'
    };
}

function getMainPageInfo() {

    const type = getQueryStringType();

    if (type == null || type == '')
        type = sineKey;

    if (type == sineKey)
        return sineInformation();

    else if (type == cosineKey)
        return cosineInformation();

    else if (type == tangentKey)
        return tangentInformation();

    else if (type == cosecantKey)
        return cosecantInformation();

    else if (type == secantKey)
        return secantInformation();

    else if (type == cotangentKey)
        return cotangentInformation();

    else
        return sineInformation();
}

let information = getMainPageInfo();
let functionNameHeader = document.getElementById('func-name');
let functionDescription = document.getElementById('func-description');

functionNameHeader.innerText = information.name;
functionDescription.innerText = information.description;