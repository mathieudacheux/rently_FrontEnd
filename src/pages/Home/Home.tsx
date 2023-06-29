import { useState, useEffect } from 'react'

export default function Home(): JSX.Element {
  const [theme, setTheme] = useState<string>('lightThemeRently')

  const toggleTheme = () => {
    setTheme(theme === 'lightThemeRently' ? 'darkThemeRently' : 'lightThemeRently')
  }

  console.log(theme)
  useEffect(() => {
    document?.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <h1 className=''></h1>
      <button className='btn btn-error btn-lg ' onClick={toggleTheme}>
        Toogle Dark Mode
      </button>
    </>
  )
}
