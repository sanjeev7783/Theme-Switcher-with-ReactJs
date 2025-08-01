import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Theme {
  id: string
  name: string
  layout: 'default' | 'sidebar' | 'grid'
  colors: {
    bg: string
    text: string
    card: string
    button: string
    header: string
    accent: string
  }
  fonts: {
    primary: string
    heading: string
  }
  spacing: {
    container: string
    section: string
  }
}

const themes: Record<string, Theme> = {
  theme1: {
    id: 'theme1',
    name: 'Theme 1',
    layout: 'default',
    colors: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      card: 'bg-white',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      header: 'bg-white border-b border-gray-200',
      accent: 'text-blue-600'
    },
    fonts: {
      primary: 'font-sans',
      heading: 'font-sans font-light'
    },
    spacing: {
      container: 'max-w-4xl mx-auto px-6',
      section: 'py-8'
    }
  },
  theme2: {
    id: 'theme2',
    name: 'Theme 2',
    layout: 'sidebar',
    colors: {
      bg: 'bg-gray-900',
      text: 'text-gray-100',
      card: 'bg-gray-800',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      header: 'bg-gray-800 border-b border-gray-700',
      accent: 'text-purple-400'
    },
    fonts: {
      primary: 'font-serif',
      heading: 'font-serif font-bold'
    },
    spacing: {
      container: 'max-w-6xl mx-auto px-8',
      section: 'py-12'
    }
  },
  theme3: {
    id: 'theme3',
    name: 'Theme 3',
    layout: 'grid',
    colors: {
      bg: 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100',
      text: 'text-gray-800',
      card: 'bg-white/80 backdrop-blur-sm',
      button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white',
      header: 'bg-white/90 backdrop-blur-md border-b border-purple-200',
      accent: 'text-purple-600'
    },
    fonts: {
      primary: 'font-pacifico',
      heading: 'font-pacifico'
    },
    spacing: {
      container: 'max-w-7xl mx-auto px-4',
      section: 'py-6'
    }
  }
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  themes: Record<string, Theme>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentThemeId, setCurrentThemeId] = useState('theme1')

  useEffect(() => {
    const saved = localStorage.getItem('selectedTheme')
    if (saved && themes[saved]) {
      setCurrentThemeId(saved)
    }
  }, [])

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentThemeId(themeId)
      localStorage.setItem('selectedTheme', themeId)
    }
  }

  return (
    <ThemeContext.Provider value={{
      currentTheme: themes[currentThemeId],
      setTheme,
      themes
    }}>
      {children}
    </ThemeContext.Provider>
  )
}