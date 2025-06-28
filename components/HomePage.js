import React from 'react';
import { 
  Brain, 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  Play 
} from 'lucide-react';
import { motion } from 'framer-motion';
function HomePage({ user, setCurrentView }) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Adaptive learning paths tailored to your unique learning style and pace',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Smart Goal Setting',
      description: 'Set and track personalized learning goals with AI recommendations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Connect with peers and learn together in AI-facilitated study groups',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Achievement Tracking',
      description: 'Earn badges and certificates as you progress through your learning journey',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentCourses = [
    {
      id: 1,
      title: 'Advanced JavaScript Concepts',
      progress: 75,
      nextLesson: 'Async/Await Patterns',
      timeLeft: '2h 30m',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      progress: 45,
      nextLesson: 'Neural Networks Intro',
      timeLeft: '4h 15m',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      progress: 90,
      nextLesson: 'Accessibility Guidelines',
      timeLeft: '1h 45m',
      difficulty: 'Advanced'
    }
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <motion.section
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        className="text-center mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your AI-powered learning companion is ready to help you achieve your educational goals. 
            Let's continue your learning journey with personalized recommendations.
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{user.progress}%</h3>
              <p className="text-gray-600">Overall Progress</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{user.streak}</h3>
              <p className="text-gray-600">Day Streak</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{user.points}</h3>
              <p className="text-gray-600">Total Points</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentView('courses')}
              className="btn-primary"
            >
              Continue Learning
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setCurrentView('ai-tutor')}
              className="btn-secondary"
            >
              <Brain className="w-5 h-5 mr-2" />
              Ask AI Tutor
            </button>
          </div>
        </div>
      </motion.section>

      {/* Continue Learning Section */}
      <motion.section
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Continue Learning</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <div key={course.id} className="glass-effect rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.difficulty}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.timeLeft}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">Next: {course.nextLesson}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="w-full btn-primary flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" />
                Continue
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Powered by AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="glass-effect rounded-2xl p-6 card-hover text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
export default HomePage;