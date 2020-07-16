const request = require('request')

const pincode = '110001'

const url = 'https://api.postalpincode.in/pincode/' + pincode;

request({ url }, (error, response) => {
    const recievedData = JSON.parse(response.body)
    recievedData[0].PostOffice.map((element, i) => {
        console.log(`${element.Name}\n`)
    })
})