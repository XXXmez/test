async function parseUrl(url) {
    try {
        let res = await fetch(url)
        let json = await res.json();
        
        return json
        
    } catch (error) {
        console.log(error);
    }
}

export default parseUrl;