import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="header-actions">
          <span className="user-email">{user?.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>
      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome, Admin!</h2>
          <p>This is the admin dashboard. You have access to administrative features.</p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Manage Users</h3>
            <p>Manage club leaders and their accounts</p>
          </div>
          <div className="dashboard-card">
            <h3>System Settings</h3>
            <p>Configure system-wide settings</p>
          </div>
          <div className="dashboard-card">
            <h3>Reports</h3>
            <p>View system reports and analytics</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard

