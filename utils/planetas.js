const request = require('postman-request')

const url = 'https://solar-system2-api.herokuapp.com/planets'

let getAllPlanets = (callback) => {
    request(url, (err, res, body) => {
        const parsedBody = JSON.parse(body)
        callback(parsedBody)
    })
}


module.exports = getAllPlanets