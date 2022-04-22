import { MutableRefObject } from 'react'
import useEventListener from './useEventListener'

const useClickOutside = (ref: MutableRefObject<any>, cb: any): any => {
  useEventListener(
    'click',
    (e: any) => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document,
  )

  useEventListener(
    'keydown',
    (e: any) => {
      if (e.key === 'Escape') {
        cb(e)
      }
    },
    document,
  )
}

export default useClickOutside
