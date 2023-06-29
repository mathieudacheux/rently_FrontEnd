import { useState } from 'react'
function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  console.log('count', count)

  return (
    <>
      <h1>Hello world</h1>
      <div className='card'>
        <button
          className='btn btn-accent btn-outline'
          onClick={() => setCount((count) => count + 1)}
        >
          Three
        </button>
        <p>
          You clicked <b>{count}</b> times
        </p>
      </div>
    </>
  )
}

export default App
