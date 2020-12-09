import { fetchWeathers } from './index'
import { getWeathers } from '../apis/weathers'

jest.mock('../apis/weathers', () => ({
  getWeathers: jest.fn()
}))

const fakeDispatch = jest.fn()

describe('fetechWeathers', () => {
  describe('this bit works', () => {
    const fakeWeather = [{
      weather: 'sux'
    }]

    beforeAll(() => {
      jest.clearAllMocks()
      getWeathers.mockImplementation(() => Promise.resolve(fakeWeather))
    })

    test('call the getWeathers api client', () => {
      fetchWeathers()(fakeDispatch)
      expect(getWeathers).toHaveBeenCalled()
    })

  })
})

