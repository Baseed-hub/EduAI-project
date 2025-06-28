export default function handler(req, res) {
  const { id } = req.query
  const course = coursesData.find(c => c.id === parseInt(id))
  
  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }
  
  if (req.method === 'GET') {
    res.status(200).json(course)
  } else if (req.method === 'POST') {
    // Enroll in course
    const { userId } = req.body
    // In a real app, you'd save this to a database
    course.isEnrolled = true
    res.status(200).json({ message: 'Successfully enrolled', course })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
