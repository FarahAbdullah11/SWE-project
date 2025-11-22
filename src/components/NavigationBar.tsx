import { Link, useLocation } from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-container">
            <div className="logo-monogram">NU</div>
            <div className="logo-text">
              <div className="logo-english">Nile University</div>
              <div className="logo-arabic">جامعة النيل</div>
            </div>
          </div>
        </div>

        {/* CLUBS Heading */}
        <div className="navbar-title">CLUBS</div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link 
            to="/home"
            className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/request" 
            className={`nav-link ${location.pathname === '/request' ? 'active' : ''}`}
          >
            Request
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
