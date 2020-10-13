const request = require('request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=08093ced9c72584cb1d3075cdcb40f1c&query=' + latitude + ',' + longitude + '&units=f'
 
   request({ url: url, json: true }, (error, { body } = {}) => {
      if(error) {
         callback('Unable to connect to weather service!', undefined) 
      } else if (body.error) {
         callback('Unable to find location', undefined)
      } else {
         callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees outside. The temperature feels like ' + body.current.feelslike + ' degrees outside.')
      }
    })
 }
 
module.exports = forecast