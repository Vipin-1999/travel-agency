const accessToken = require('./secret.js')
const resource = require('./resources')
const crossProduct = require('./crossProduct')
const fetchData = require('./fetchData.js')

const cities = ['Bangalore', 'Kolkata', 'Delhi', 'Hyderabad', 'Chennai']
const searchQuery = ['Travel%20Agency', 'Travel%20Agents', 'International%20Travel%20Agent']

crossProduct(cities, searchQuery).map(x => {
    let url = resource.baseURL + x[1] + '%20' + x[0] + resource.queryString + accessToken;
    fetchData(url, x)
});