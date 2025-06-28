const achievementsData = [
  {
    id: 1,
    title: 'Speed Learner',
    description: 'Complete 5 lessons in one day',
    icon: '⚡',
    earned: true,
    date: '2025-06-20',
    category: 'learning'
  },
  {
    id: 2,
    title: 'Consistency Master',
    description: 'Study for 7 consecutive days',
    icon: '🏆',
    earned: true,
    date: '2025-06-18',
    category: 'consistency'
  },
  {
    id: 3,
    title: 'Knowledge Seeker',
    description: 'Complete 3 different courses',
    icon: '📚',
    earned: true,
    date: '2025-06-15',
    category: 'completion'
  },
  {
    id: 4,
    title: 'Night Owl',
    description: 'Study after 10 PM for 5 days',
    icon: '🦉',
    earned: false,
    progress: 60,
    category: 'schedule'
  },
  {
    id: 5,
    title: 'Perfect Score',
    description: 'Score 100% on 10 quizzes',
    icon: '💯',
    earned: false,
    progress: 80,
    category: 'performance'
  }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query
    res.status(200).json(achievementsData)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}