import React, { useState } from 'react';
import CourseCard from './CourseCard';
function CoursesPage({ user }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'business', name: 'Business' },
  ]

  const courses = [
    {
      id: 1,
      title: 'Full Stack JavaScript Development',
      instructor: 'Dr. Sarah Chen',
      category: 'programming',
      difficulty: 'Intermediate',
      duration: '12 weeks',
      rating: 4.8,
      students: 15420,
      price: 'Free',
      description: 'Master modern JavaScript development with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      progress: 0,
      isEnrolled: false
    },
    {
      id: 2,
      title: 'Machine Learning with Python',
      instructor: 'Prof. Michael Rodriguez',
      category: 'data-science',
      difficulty: 'Advanced',
      duration: '16 weeks',
      rating: 4.9,
      students: 8730,
      price: '$99',
      description: 'Deep dive into ML algorithms, neural networks, and real-world applications',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      progress: 45,
      isEnrolled: true
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Thompson',
      category: 'design',
      difficulty: 'Beginner',
      duration: '8 weeks',
      rating: 4.7,
      students: 22150,
      price: '$79',
      description: 'Learn design thinking, prototyping, and user research methodologies',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      progress: 90,
      isEnrolled: true
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'James Wilson',
      category: 'business',
      difficulty: 'Intermediate',
      duration: '10 weeks',
      rating: 4.6,
      students: 18900,
      price: '$89',
      description: 'Comprehensive guide to modern digital marketing and analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      progress: 0,
      isEnrolled: false
    },
    {
      id: 5,
      title: 'Advanced React Development',
      instructor: 'Lisa Park',
      category: 'programming',
      difficulty: 'Advanced',
      duration: '14 weeks',
      rating: 4.8,
      students: 12450,
      price: '$120',
      description: 'Master advanced React patterns, hooks, and performance optimization',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400',
      progress: 75,
      isEnrolled: true
    },
    {
      id: 6,
      title: 'Data Visualization with D3.js',
      instructor: 'Dr. Kevin Zhang',
      category: 'data-science',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      rating: 4.7,
      students: 9870,
      price: '$69',
      description: 'Create stunning interactive data visualizations and dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      progress: 0,
      isEnrolled: false
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Explore Courses</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover AI-curated courses tailored to your learning goals and preferences
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto lg:overflow-visible">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-4 rounded-xl font-medium whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
export default CoursesPage;