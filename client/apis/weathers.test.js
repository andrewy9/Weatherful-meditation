import nock from 'nock'
import { getWeathers } from './weathers'

describe('getWeathers', () => {
  const fakeWeather = [{
    weather: 'sux'
  }]
  const scope = nock('http://localhost:3000')
    .get('/api/v1/weathers/123')
    .reply(200, fakeWeather)

  test('returns weathers from api', () => {
    expect.assertions(1)

    return getWeathers()
      .then(weather => {
        expect(weather).toEqual(fakeWeather)
        return null
      })
  })
})
