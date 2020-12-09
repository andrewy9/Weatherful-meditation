import weathers from './weathers'
import { setWeather } from '../actions'

describe('weathers', () => {
  test('iniitalk state is an empty array', () => {
    const state = weathers(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })

  test('SET_COHORTS rewrites the state', () => {
    const initialWeather = [{ weather: 'sux' }]
    const newWeather = [{ weather: 'still sux' }]

    const action = setWeather(newWeather)
    const state = weathers(initialWeather, action)
    expect(state).toEqual(newWeather)
  })
})