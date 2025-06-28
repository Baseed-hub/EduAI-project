export default function handler(req, res) {
  if (req.method === 'GET') {
    const { userId, timeframe = 'week' } = req.query
    
    const progressData = {
      week: [
        { day: 'Mon', hours: 2.5, points: 150, lessonsCompleted: 3 },
        { day: 'Tue', hours: 3.2, points: 200, lessonsCompleted: 4 },
        { day: 'Wed', hours: 1.8, points: 120, lessonsCompleted: 2 },
        { day: 'Thu', hours: 4.1, points: 280, lessonsCompleted: 5 },
        { day: 'Fri', hours: 2.9, points: 190, lessonsCompleted: 3 },
        { day: 'Sat', hours: 5.2, points: 350, lessonsCompleted: 7 },
        { day: 'Sun', hours: 3.6, points: 240, lessonsCompleted: 4 }
      ],
      month: [
        { day: 'Week 1', hours: 18.5, points: 1200, lessonsCompleted: 12 },
        { day: 'Week 2', hours: 22.3, points: 1450, lessonsCompleted: 15 },
        { day: 'Week 3', hours: 19.8, points: 1300, lessonsCompleted: 13 },
        { day: 'Week 4', hours: 25.1, points: 1650, lessonsCompleted: 18 }
      ]
    }
    
    res.status(200).json(progressData[timeframe] || progressData.week)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}