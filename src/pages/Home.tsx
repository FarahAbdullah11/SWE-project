import NavigationBar from '../components/NavigationBar'
import './Home.css'

const Home = () => {
  const handleSubmitRequest = () => {
    // Add your navigation or action here
    console.log('Submit Request clicked')
  }

  return (
    <div>
      <NavigationBar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Central Hub for NU Clubs and SU</h1>
          <p className="hero-subtitle">
            Manage events, submit requests, and collaborate efficiently.
          </p>
          <button 
            className="submit-request-button"
            onClick={handleSubmitRequest}
          >
            Submit Request
          </button>
        </div>
        <div className="content-cards">
          <div className="content-card">
            <h2 className="card-heading">Submit a request</h2>
            <p className="card-description">
              Manage events, submit requests, and collaborate efficiently.
            </p>
          </div>
          <div className="content-card">
            <h2 className="card-heading">View events calendar</h2>
            <p className="card-description">
              Manage events, submit requests, and collaborate efficiently.
            </p>
          </div>
          <div className="content-card">
            <h2 className="card-heading">View my requests</h2>
            <p className="card-description">
              Manage events, submit requests, and collaborate efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
