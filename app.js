const accessToken = require('./secret.js')
const resource = require('./resources')
const crossProduct = require('./crossProduct')
const fetchData = require('./fetchData.js')

const cities = ['Bangalore', 'Kolkata', 'Delhi', 'Hyderabad', 'Chennai']
const searchQuery = ['Travel Agency', 'Travel Agents', 'International Travel Agent']

crossProduct(cities, searchQuery).map(x => {
    let url = resource.baseURL + searchQuery[0] + cities[0] + resource.queryString + accessToken;
    fetchData(url, x)
});