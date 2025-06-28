import React, { useState } from 'react';
import { Clock, BookOpen, Award, Sparkles, Settings } from 'lucide-react';

function ProfilePage({ user }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    bio: 'Passionate learner exploring the world of technology and design.',
    learningGoals: 'Master full-stack development and machine learning',
    preferredSchedule: 'Evenings',
    notifications: {
      email: true,
      push: false,
      reminders: true
    }
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const learningStats = [
    { label: 'Total Learning Time', value: '156 hours', icon: Clock },
    { label: 'Courses Completed', value: '8 courses', icon: BookOpen },
    { label: 'Current Streak', value: `${user.streak} days`, icon: Award },
    { label: 'Total Points', value: `${user.points} pts`, icon: Sparkles }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Profile Settings</h1>
        <p className="text-xl text-gray-600">
          Manage your account and personalize your learning experience
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Header */}
        <div className="glass-effect rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="text-2xl font-bold bg-transparent border-b-2 border-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="block text-gray-600 bg-transparent border-b border-gray-300 outline-none"
                  />
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="block w-full text-gray-600 bg-transparent border border-gray-300 rounded-lg p-2 outline-none"
                    rows="3"
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
                  <p className="text-gray-600 mb-4">{profileData.email}</p>
                  <p className="text-gray-700">{profileData.bio}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                {isEditing ? (
                  <>
                    <button onClick={handleSave} className="btn-primary">
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="btn-primary"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Statistics */}
        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {learningStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Goals
              </label>
              {isEditing ? (
                <textarea
                  value={profileData.learningGoals}
                  onChange={(e) => setProfileData({...profileData, learningGoals: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{profileData.learningGoals}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Study Time
              </label>
              {isEditing ? (
                <select
                  value={profileData.preferredSchedule}
                  onChange={(e) => setProfileData({...profileData, preferredSchedule: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Mornings">Mornings</option>
                  <option value="Afternoons">Afternoons</option>
                  <option value="Evenings">Evenings</option>
                  <option value="Flexible">Flexible</option>
                </select>
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{profileData.preferredSchedule}</p>
              )}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h3>
          <div className="space-y-4">
            {Object.entries(profileData.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()} Notifications
                  </h4>
                  <p className="text-sm text-gray-600">
                    {key === 'email' && 'Receive course updates and announcements via email'}
                    {key === 'push' && 'Get push notifications on your device'}
                    {key === 'reminders' && 'Receive study reminders and streak notifications'}
                  </p>
                </div>
                <button
                  onClick={() => setProfileData({
                    ...profileData,
                    notifications: {
                      ...profileData.notifications,
                      [key]: !value
                    }
                  })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage;