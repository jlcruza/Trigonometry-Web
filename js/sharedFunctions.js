function getQueryStringType() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const type = params.type;

    if (type == null || type == '')
        return sineKey;
    else
        return type
}

function sineGraph(x) { return Math.sin(x); }
function cosineGraph(x) { return Math.cos(x); }
function tangentGraph(x) { return Math.tan(x); }
function cosecantGraph(x) { return 1 / Math.sin(x); }
function secantGraph(x) { return 1 / Math.cos(x); }
function cotangentGraph(x) { return 1 / Math.tan(x); }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}