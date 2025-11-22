# NU Clubs Portal - Website

A web portal for NU Clubs management system with separate dashboards for administrators and club leaders.

## Features

- **Login Page**: Shared login page for both admins and club leaders
- **Admin Dashboard**: Separate dashboard for administrators (4 admin accounts)
- **Club Leader Dashboard**: Separate dashboard for club leaders (20 club leader accounts)
- **Role-based Access Control**: Automatic routing based on user role after login

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Account Information

### Admin Accounts (4 accounts)
- Email: `admin1@nu.edu` through `admin4@nu.edu`
- Password: `admin123`
- Role: Admin

### Club Leader Accounts (20 accounts)
- Email: `leader1@nu.edu` through `leader20@nu.edu`
- Password: `leader123`
- Role: Club Leader

## Project Structure

```
SWE-project/
├── src/
│   ├── pages/
│   │   ├── Login.tsx          # Login page (shared)
│   │   ├── Login.css
│   │   ├── AdminDashboard.tsx  # Admin dashboard
│   │   ├── ClubLeaderDashboard.tsx  # Club leader dashboard
│   │   └── Dashboard.css
│   ├── components/
│   │   └── ProtectedRoute.tsx  # Route protection component
│   ├── context/
│   │   └── AuthContext.tsx     # Authentication context
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
└── package.json
```

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router DOM

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any web server.
