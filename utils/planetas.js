const request = require('postman-request')

const url = 'http://localhost:3001/planets'

let getAllPlanets = (callback) => {
    request(url, (err, res, body) => {
        const parsedBody = JSON.parse(body)
        callback(parsedBody)
    })
}


module.exports = getAllPlanets