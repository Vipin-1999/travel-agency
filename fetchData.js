const request = require('request')

const fetchData = (u, x) => {
    request({ url: u }, (error, response) => {
        const recievedData = JSON.parse(response.body)
        console.log(`\n Fetching ${x[1]} in ${x[0]} \n`)
        recievedData.data.map((element, i) => {
            const zip = element.location.zip == undefined ? "" : element.location.zip;
            const location = `${element.location.street}, ${element.location.country}, ${element.location.city} - ${zip}`
            console.log(`${i+1}. ${element.name}, \n ${location}\n`)
        })
    })
}

module.exports = fetchData