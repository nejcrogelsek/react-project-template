import { renderHook } from '@testing-library/react-hooks'
import { useWindowWidth } from './useWindowWidth'

jest.mock('hooks/useWindowWidth')

describe('useWindowWidth hook', () => {
  it('provide window width', async () => {
    const { result } = renderHook(useWindowWidth)

    expect(result).toBeGreaterThan(0)
  })
})
