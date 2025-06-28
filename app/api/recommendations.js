export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query
    
    // Simulate AI-powered recommendations
    const recommendations = [
      {
        type: 'course',
        title: 'Advanced React Patterns',
        reason: 'Based on your progress in JavaScript',
        confidence: 95,
        category: 'programming'
      },
      {
        type: 'topic',
        title: 'Async Programming',
        reason: 'Commonly needed after learning React basics',
        confidence: 88,
        category: 'programming'
      },
      {
        type: 'study_plan',
        title: 'Weekend Deep Dive Session',
        reason: 'You learn best during weekends',
        confidence: 92,
        category: 'schedule'
      }
    ]
    
    res.status(200).json(recommendations)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}