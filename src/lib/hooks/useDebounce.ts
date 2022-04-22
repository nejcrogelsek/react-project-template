import { useState } from 'react'

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>(
    setTimeout(() => {
      return
    }),
  )

  const debounce = (func: () => void, wait: number) => {
    clearTimeout(typingTimeout)
    const timeout = setTimeout(() => {
      func()
    }, wait)
    setTypingTimeout(timeout)
  }

  return debounce
}

export default useDebounce
