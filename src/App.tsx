import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

import { useTheme } from "./contexts/ThemeContext"

function AppContent() {
  const { currentTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentTheme.colors.bg} ${currentTheme.colors.text} ${currentTheme.fonts.primary}`}>
      <Header />
      
      <main className={`pt-16 ${currentTheme.spacing.section}`}>
        <div className={currentTheme.spacing.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}