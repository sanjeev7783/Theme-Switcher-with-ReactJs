import { useTheme } from '../contexts/ThemeContext'

export default function About() {
  const { currentTheme } = useTheme()

  return (
    <div className={`space-y-8 ${currentTheme.fonts.primary}`}>
      <div>
        <h1 className={`text-4xl ${currentTheme.fonts.heading} mb-4 ${currentTheme.colors.accent}`}>About Us</h1>
        <p className={`text-lg ${currentTheme.colors.text}`}>
          We are a modern company focused on delivering exceptional user experiences through innovative design.
        </p>
      </div>

      <div className={`${currentTheme.colors.card} p-8 rounded-lg shadow-lg`}>
        <h2 className={`text-2xl ${currentTheme.fonts.heading} mb-4`}>Our Mission</h2>
        <p className={`${currentTheme.colors.text} mb-6`}>
          To create beautiful, functional, and accessible web applications that delight users and drive business success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className={`text-xl ${currentTheme.fonts.heading} mb-3 ${currentTheme.colors.accent}`}>Our Values</h3>
            <ul className={`space-y-2 ${currentTheme.colors.text}`}>
              <li>• Innovation and creativity</li>
              <li>• User-centered design</li>
              <li>• Quality and excellence</li>
              <li>• Continuous learning</li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-xl ${currentTheme.fonts.heading} mb-3 ${currentTheme.colors.accent}`}>Technologies</h3>
            <ul className={`space-y-2 ${currentTheme.colors.text}`}>
              <li>• React & TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Context API</li>
              <li>• React Router</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${currentTheme.colors.card} p-8 rounded-lg shadow-lg`}>
        <h2 className={`text-2xl ${currentTheme.fonts.heading} mb-4`}>Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className={`text-3xl mb-3 ${currentTheme.colors.accent}`}>🚀</div>
            <h3 className={`font-semibold mb-2 ${currentTheme.colors.text}`}>Fast Performance</h3>
            <p className={`text-sm ${currentTheme.colors.text} opacity-80`}>Optimized for speed and efficiency</p>
          </div>
          <div className="text-center">
            <div className={`text-3xl mb-3 ${currentTheme.colors.accent}`}>🎨</div>
            <h3 className={`font-semibold mb-2 ${currentTheme.colors.text}`}>Beautiful Design</h3>
            <p className={`text-sm ${currentTheme.colors.text} opacity-80`}>Stunning visuals that engage users</p>
          </div>
          <div className="text-center">
            <div className={`text-3xl mb-3 ${currentTheme.colors.accent}`}>🔒</div>
            <h3 className={`font-semibold mb-2 ${currentTheme.colors.text}`}>Secure & Reliable</h3>
            <p className={`text-sm ${currentTheme.colors.text} opacity-80`}>Built with security best practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}