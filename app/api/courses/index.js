const coursesData = [
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
    modules: [
      { id: 1, title: 'JavaScript Fundamentals', duration: '2 weeks', completed: true },
      { id: 2, title: 'React Basics', duration: '3 weeks', completed: true },
      { id: 3, title: 'Node.js & Express', duration: '3 weeks', completed: false },
      { id: 4, title: 'Database Integration', duration: '2 weeks', completed: false },
      { id: 5, title: 'Deployment & Testing', duration: '2 weeks', completed: false }
    ],
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
    modules: [
      { id: 1, title: 'Python for Data Science', duration: '2 weeks', completed: true },
      { id: 2, title: 'Statistics & Probability', duration: '2 weeks', completed: true },
      { id: 3, title: 'Supervised Learning', duration: '4 weeks', completed: false },
      { id: 4, title: 'Unsupervised Learning', duration: '3 weeks', completed: false },
      { id: 5, title: 'Neural Networks', duration: '3 weeks', completed: false },
      { id: 6, title: 'Deep Learning', duration: '2 weeks', completed: false }
    ],
    progress: 45,
    isEnrolled: true
  }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { category, search } = req.query
    
    let filteredCourses = coursesData
    
    if (category && category !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.category === category)
    }
    
    if (search) {
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase())
      )
    }
    
    res.status(200).json(filteredCourses)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

