const utils = { 
    parseRequestURL : () => {

        let url = location.hash.slice(2).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null
        }
        request.resource    = r[1]
        return request
    }
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default utils;