import request from 'supertest'
import server from '../server'

describe('GET /weathers', () => {
  test('calls the metaweather api', () => {
    expect.assertions(1)

    return request(server)
      .get('/api/v1/weathers/2351310')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
})