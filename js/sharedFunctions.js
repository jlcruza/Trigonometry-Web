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