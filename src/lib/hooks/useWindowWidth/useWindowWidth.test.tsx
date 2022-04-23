import { renderHook } from '@testing-library/react-hooks'
import { useWindowWidth } from './useWindowWidth'

describe('useWindowWidth hook', () => {
  it('provide window width', async () => {
    const { result } = renderHook(useWindowWidth)

    expect(result.current).toBeGreaterThan(0)
  })
})
