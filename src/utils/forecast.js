const request = require('request');

const forecast = (longitude, latitude, callback) => {
const url = `http://api.weatherstack.com/current?access_key=08afdbba194305b668e64b03239cdb7b&query=${latitude},${longitude}&units=f`

request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback("Unable to connect to weather service");
    } else if (body.error) {
        callback("Unable to find location")
    } else {
       callback(undefined, (body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degress out."));
    }
})
}

module.exports = forecast