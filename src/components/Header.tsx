import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const { currentTheme, setTheme, themes } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${currentTheme.colors.header} ${currentTheme.fonts.primary}`}>
      <div className={currentTheme.spacing.container}>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className={`text-xl ${currentTheme.fonts.heading} ${currentTheme.colors.accent}`}>
            Multi-Theme App
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? currentTheme.colors.accent : currentTheme.colors.text} hover:${currentTheme.colors.accent.replace('text-', 'text-')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? currentTheme.colors.accent : currentTheme.colors.text} hover:${currentTheme.colors.accent.replace('text-', 'text-')}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? currentTheme.colors.accent : currentTheme.colors.text} hover:${currentTheme.colors.accent.replace('text-', 'text-')}`}
            >
              Contact
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-4 py-2 rounded-md ${currentTheme.colors.button} transition-all duration-200`}
              >
                {currentTheme.name} ▼
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {Object.values(themes).map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          setTheme(theme.id)
                          setIsDropdownOpen(false)
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                          currentTheme.id === theme.id ? 'bg-gray-50 font-medium' : ''
                        }`}
                      >
                        {theme.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      
      {isDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
      )}
    </header>
  )
}