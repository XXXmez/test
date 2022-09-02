async function parseUrl(url) {
    try {
        const res = await fetch(url)
        const json = await res.json();
        return json
    } catch (error) {
        console.log(error);
    }
}

export default parseUrl;