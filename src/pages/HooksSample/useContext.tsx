import React, { useState, createContext, useContext, useCallback } from 'react'

const themes: any = {
  light: { foreground: '#000000', background: '#eeeeee' },
  dark: { foreground: '#ffffff', background: '#222222' }
}
export const ThemeContext = createContext(themes.dark)
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Children />
      <button onClick={toggleTheme}>切换主题</button>
    </ThemeContext.Provider>
  )
}

function Children() {
  return <ThemeButton />
}

function ThemeButton() {
  const theme = useContext(ThemeContext)
  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground
      }}
    >
      我是一个有个性的button
    </button>
  )
}

export default App
