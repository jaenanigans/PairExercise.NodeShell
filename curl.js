const request = require('request')

module.exports = (url, done) => {
    request(url, (err, response, body) => {
        if (err) {
            done(err)
        } else {
            done(body)
        }
    })
}