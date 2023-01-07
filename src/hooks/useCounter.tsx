import { useState } from 'react'

interface CounterState {
  counter: number,
  clicks: number
}

export const UseCounter = (initialState: CounterState) => {
  const [counter, setCounter] = useState<CounterState>(initialState)

  const handleCounter = (value: number) => {
    setCounter(({ clicks, counter }) => ({
      clicks: clicks + 1,
      counter: counter + value
    }))
  }
  const handleReset = () => {
    setCounter(() => ({
      counter: 0,
      clicks: 0
    }))
  }
  return ({
    handleCounter,
    handleReset,
    ...counter
  }
  )
}
