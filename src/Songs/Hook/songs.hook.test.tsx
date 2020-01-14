import { renderHook, act } from '@testing-library/react-hooks'
import { useSongData } from './songs.hook'
import { FORMATTED_DATA } from '../songs.test.mocks'

describe('Use Song Hook Test Suite', () => {
  test('Hook returns empty array on first update', async () => {
    const { result } = renderHook(() => useSongData())

    expect(result.current.songState).toStrictEqual([])
  })

  test('Hook returns formatted song data on second update', async () => {
    jest.useFakeTimers()

    const { result, waitForNextUpdate } = renderHook(() => useSongData())

    // this is to handle the setTimeout in the hook.
    setImmediate(() => {
      act(() => {
        jest.runAllTimers()
      })
    })

    // after the setTimeout, we wait for the second update from the hook
    await waitForNextUpdate()

    // this time we expect to see our formatted data returned from the hook
    expect(result.current).toStrictEqual(FORMATTED_DATA)
  })
})
