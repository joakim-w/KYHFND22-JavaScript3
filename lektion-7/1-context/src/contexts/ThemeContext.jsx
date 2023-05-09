import { createContext, useState } from 'react'

export const ThemeContext = createContext()




const ThemeContextProvider = ({ children }) => {

  const [isLightTheme, setIsLightTheme] = useState(true)

  const light = {
    text: '#222',
    ui: '#fff',
    bg: '#eee'
  }
  const dark = {
    text: '#fff',
    ui: '#333',
    bg: '#888'
  }

  const theme = isLightTheme ? light : dark

  const toggleTheme = () => {
    setIsLightTheme(theme => !theme)
  }

  const value = {
    isLightTheme,
    toggleTheme,
    theme
  }
  return (
    <ThemeContext.Provider value={value} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider