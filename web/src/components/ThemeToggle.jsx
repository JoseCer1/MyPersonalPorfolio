import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const THEME_KEY = 'theme'
const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const getInitialTheme = () => {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return prefersDark() ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <button
      className="btn icon-btn"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}

export default ThemeToggle 