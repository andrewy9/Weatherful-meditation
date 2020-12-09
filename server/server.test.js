import request from 'supertest'
import server from './server'
import nock from 'nock'


describe('GET /weathers', () => {
  const fakeObj = {
    weather: 'is bad'
  }
  const scope = nock(`https://www.metaweather.com`)
    .get('/api/location/2351310')
    .reply(200, fakeObj)

  test('calls the metaweather api', () => {
    expect.assertions(2)

    return request(server)
      .get('/api/v1/weathers/2351310')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(fakeObj)
        return null
      })
      .catch(error =>
        console.log(error))
  })
})