import React, { createContext, useContext, useState, useEffect } from 'react'

export type UserRole = 'admin' | 'club_leader'

export interface User {
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database - In production, this would be in a backend
const USERS: Array<{ email: string; password: string; role: UserRole }> = [
  // Admin accounts (4 accounts)
  { email: 'admin1@nu.edu', password: 'admin123', role: 'admin' },
  { email: 'admin2@nu.edu', password: 'admin123', role: 'admin' },
  { email: 'admin3@nu.edu', password: 'admin123', role: 'admin' },
  { email: 'admin4@nu.edu', password: 'admin123', role: 'admin' },
  // Club leader accounts (20 accounts - club leaders create these)
  { email: 'leader1@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader2@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader3@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader4@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader5@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader6@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader7@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader8@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader9@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader10@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader11@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader12@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader13@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader14@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader15@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader16@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader17@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader18@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader19@nu.edu', password: 'leader123', role: 'club_leader' },
  { email: 'leader20@nu.edu', password: 'leader123', role: 'club_leader' },
]

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const foundUser = USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )

    if (foundUser) {
      const userData: User = {
        email: foundUser.email,
        role: foundUser.role,
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

