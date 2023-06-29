import { useState } from 'react'
import { useTranslation } from 'react-i18next'
function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('welcome')}</h1>
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
