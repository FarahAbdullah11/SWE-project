import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const ClubLeaderDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Club Leader Dashboard</h1>
        <div className="header-actions">
          <span className="user-email">{user?.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>
      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome, Club Leader!</h2>
          <p>This is the club leader dashboard. Manage your club activities here.</p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>My Club</h3>
            <p>View and manage your club information</p>
          </div>
          <div className="dashboard-card">
            <h3>Events</h3>
            <p>Create and manage club events</p>
          </div>
          <div className="dashboard-card">
            <h3>Members</h3>
            <p>Manage club members</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ClubLeaderDashboard

