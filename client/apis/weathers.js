import request from 'superagent'
const serverURL = 'http://localhost:3000/api/v1'

export function getWeathers (woeid) {
  return request
    .get(`/api/v1/weathers/${woeid}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET'))
}

function errorHandler (method) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${serverURL}/weathers`)
    } else {
      throw Error(`${err.message} on ${method} ${serverURL}/weathers`)
    }
  }
}
