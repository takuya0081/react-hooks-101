import React, {useState} from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(a => a + 1)
  
  const reset = () => setCount(0)
  return (
    <>
      <div> count: {count}</div>
      <div>
        <button onClick={increment} >+1</button>
        <button onClick={decrement} >-1</button>
      </div>
      <div>
        <button onClick={increment2} >+1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>

    </>
  )
  }
export default App