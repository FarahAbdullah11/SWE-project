import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If already authenticated, redirect to appropriate dashboard
    if (isAuthenticated && user) {
      if (user.role === 'admin') {
        navigate('/admin', { replace: true })
      } else if (user.role === 'club_leader') {
        navigate('/club-leader', { replace: true })
      }
    }
  }, [isAuthenticated, user, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        // Navigation will happen via useEffect when user state updates
      } else {
        setError('Invalid email or password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left-panel">
          <div className="login-brand">NU | Clubs Portal</div>
          <h1 className="login-welcome">Welcome to NU Clubs Portal</h1>
          <p className="login-tagline">Connect | Organize | Lead</p>
        </div>
        <div className="login-right-panel">
          <h2 className="login-title">Log In</h2>
          <p className="login-subtitle">Access your clubs dashboard</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email / University ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

