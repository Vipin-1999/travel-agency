const baseURL = 'https://graph.facebook.com/search?type=place&q='
const queryString = '&fields=name,location%20&access_token='

const resource = {
    baseURL: baseURL,
    queryString: queryString
}

module.exports = resource