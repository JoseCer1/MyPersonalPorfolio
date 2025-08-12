import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <NavLink to="/" className="brand">
          <span>My Portfolio</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Experience
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar 