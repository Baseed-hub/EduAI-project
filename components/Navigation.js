import React from 'react';
import { BookOpen, Target, Brain, TrendingUp, Sparkles, User } from 'lucide-react';

function Navigation({ currentView, setCurrentView, user }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'courses', label: 'Courses', icon: Target },
    { id: 'ai-tutor', label: 'AI Tutor', icon: Brain },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">EduAI</h1>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentView === item.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.points} points</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentView('profile')}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navigation;