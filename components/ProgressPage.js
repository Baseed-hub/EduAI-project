import React, { useState } from 'react';
import { BookOpen, Award, Clock, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

function ProgressPage({ user }) {
  const [timeFrame, setTimeFrame] = useState('week')

  const progressData = {
    week: [
      { day: 'Mon', hours: 2.5, points: 150 },
      { day: 'Tue', hours: 3.2, points: 200 },
      { day: 'Wed', hours: 1.8, points: 120 },
      { day: 'Thu', hours: 4.1, points: 280 },
      { day: 'Fri', hours: 2.9, points: 190 },
      { day: 'Sat', hours: 5.2, points: 350 },
      { day: 'Sun', hours: 3.6, points: 240 }
    ],
    month: [
      { day: 'Week 1', hours: 18.5, points: 1200 },
      { day: 'Week 2', hours: 22.3, points: 1450 },
      { day: 'Week 3', hours: 19.8, points: 1300 },
      { day: 'Week 4', hours: 25.1, points: 1650 }
    ]
  }

  const achievements = [
    {
      id: 1,
      title: 'Speed Learner',
      description: 'Complete 5 lessons in one day',
      icon: '⚡',
      earned: true,
      date: '2025-06-20'
    },
    {
      id: 2,
      title: 'Consistency Master',
      description: 'Study for 7 consecutive days',
      icon: '🏆',
      earned: true,
      date: '2025-06-18'
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Complete 3 different courses',
      icon: '📚',
      earned: true,
      date: '2025-06-15'
    },
    {
      id: 4,
      title: 'Night Owl',
      description: 'Study after 10 PM for 5 days',
      icon: '🦉',
      earned: false,
      progress: 60
    },
    {
      id: 5,
      title: 'Perfect Score',
      description: 'Score 100% on 10 quizzes',
      icon: '💯',
      earned: false,
      progress: 80
    }
  ]

  const courseProgress = [
    {
      course: 'Advanced JavaScript',
      progress: 75,
      timeSpent: '24h 30m',
      lastAccessed: '2 hours ago'
    },
    {
      course: 'Machine Learning',
      progress: 45,
      timeSpent: '18h 15m',
      lastAccessed: '1 day ago'
    },
    {
      course: 'UI/UX Design',
      progress: 90,
      timeSpent: '32h 45m',
      lastAccessed: '3 hours ago'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Your Progress</h1>
        <p className="text-xl text-gray-600">
          Track your learning journey and celebrate your achievements
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">12</h3>
          <p className="text-gray-600">Courses Enrolled</p>
        </div>
        
        <div className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">8</h3>
          <p className="text-gray-600">Certificates Earned</p>
        </div>
        
        <div className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">156h</h3>
          <p className="text-gray-600">Total Study Time</p>
        </div>
        
        <div className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{user.streak}</h3>
          <p className="text-gray-600">Day Streak</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Learning Activity Chart */}
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Learning Activity</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setTimeFrame('week')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeFrame === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeFrame('month')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeFrame === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Month
              </button>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData[timeFrame]}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course Progress */}
        <div className="glass-effect rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Progress</h2>
          <div className="space-y-6">
            {courseProgress.map((course, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{course.course}</h3>
                  <span className="text-sm text-gray-500">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.timeSpent} spent</span>
                  <span>{course.lastAccessed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="lg:col-span-2 glass-effect rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.earned
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    {achievement.earned && (
                      <p className="text-xs text-green-600">Earned {achievement.date}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                
                {!achievement.earned && achievement.progress && (
                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{achievement.progress}% complete</p>
                  </div>
                )}
                
                {achievement.earned && (
                  <div className="flex items-center text-green-600 text-sm">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProgressPage;