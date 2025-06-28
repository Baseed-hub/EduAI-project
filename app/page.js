'use client'
// ...existing code...
import LoadingScreen from '../components/LoadingScreen';
// ...existing code...
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import CoursesPage from '../components/CoursesPage';
import AITutorPage from '../components/AITutorPage';
import ProgressPage from '../components/ProgressPage';
import ProfilePage from '../components/ProfilePage';
// ...existing code...

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Brain, 
  Users, 
  Target, 
  Sparkles, 
  ChevronRight,
  Play,
  Award,
  TrendingUp,
  Clock,
  User,
  Settings,
  LogOut
} from 'lucide-react'

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    // Simulate user login
    const user = {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      level: 'Intermediate',
      progress: 68,
      streak: 15,
      points: 2450
    }
    setCurrentUser(user)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  if (!currentUser) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentView={currentView} setCurrentView={setCurrentView} user={currentUser} />
      
      {/* Main Content */}
      <main className="pt-20">
        {currentView === 'home' && <HomePage user={currentUser} setCurrentView={setCurrentView} />}
        {currentView === 'courses' && <CoursesPage user={currentUser} />}
        {currentView === 'ai-tutor' && <AITutorPage user={currentUser} />}
        {currentView === 'progress' && <ProgressPage user={currentUser} />}
        {currentView === 'profile' && <ProfilePage user={currentUser} />}
      </main>
    </div>
  )
}
