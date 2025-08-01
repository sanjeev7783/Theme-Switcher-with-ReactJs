import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function Contact() {
  const { currentTheme } = useTheme()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (Demo only)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className={`space-y-8 ${currentTheme.fonts.primary}`}>
      <div>
        <h1 className={`text-4xl ${currentTheme.fonts.heading} mb-4 ${currentTheme.colors.accent}`}>Contact Us</h1>
        <p className={`text-lg ${currentTheme.colors.text}`}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${currentTheme.colors.card} p-8 rounded-lg shadow-lg`}>
          <h2 className={`text-2xl ${currentTheme.fonts.heading} mb-6`}>Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${currentTheme.colors.text}`}>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${currentTheme.colors.text}`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${currentTheme.colors.text}`}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${currentTheme.colors.text}`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${currentTheme.colors.text}`}>Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${currentTheme.colors.text}`}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 ${currentTheme.colors.button} rounded-md transition-all duration-200`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className={`${currentTheme.colors.card} p-6 rounded-lg shadow-lg`}>
            <h3 className={`text-xl ${currentTheme.fonts.heading} mb-4 ${currentTheme.colors.accent}`}>Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className={`font-medium ${currentTheme.colors.text}`}>Email</p>
                  <p className={`${currentTheme.colors.text} opacity-80`}>contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className={`font-medium ${currentTheme.colors.text}`}>Phone</p>
                  <p className={`${currentTheme.colors.text} opacity-80`}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className={`font-medium ${currentTheme.colors.text}`}>Address</p>
                  <p className={`${currentTheme.colors.text} opacity-80`}>123 Business St, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${currentTheme.colors.card} p-6 rounded-lg shadow-lg`}>
            <h3 className={`text-xl ${currentTheme.fonts.heading} mb-4 ${currentTheme.colors.accent}`}>Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className={`${currentTheme.colors.accent} hover:opacity-80 transition-opacity`}>
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className={`${currentTheme.colors.accent} hover:opacity-80 transition-opacity`}>
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className={`${currentTheme.colors.accent} hover:opacity-80 transition-opacity`}>
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}