export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { message, userId } = req.body

  try {
    // Simulate AI response using free AI service (HuggingFace Inference API)
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_key'}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {
          max_length: 200,
          temperature: 0.7,
          do_sample: true
        }
      })
    })

    if (!response.ok) {
      // Fallback to predefined responses if API fails
      const fallbackResponse = generateFallbackResponse(message)
      return res.status(200).json({ response: fallbackResponse })
    }

    const data = await response.json()
    const aiResponse = data.generated_text || generateFallbackResponse(message)

    res.status(200).json({ response: aiResponse })
  } catch (error) {
    console.error('AI Chat Error:', error)
    const fallbackResponse = generateFallbackResponse(message)
    res.status(200).json({ response: fallbackResponse })
  }
}

function generateFallbackResponse(message) {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('react')) {
    return "React is a powerful library for building user interfaces. Would you like me to explain specific concepts like hooks, components, or state management?"
  } else if (lowerMessage.includes('javascript')) {
    return "JavaScript is a versatile programming language. I can help you with concepts like closures, promises, async/await, or ES6+ features. What specific topic interests you?"
  } else if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
    return "Machine Learning involves algorithms that learn from data. I can explain supervised learning, neural networks, or help you get started with Python libraries like scikit-learn. What would you like to know?"
  } else if (lowerMessage.includes('css') || lowerMessage.includes('styling')) {
    return "CSS is essential for web styling. I can help with flexbox, grid, animations, or responsive design. What CSS topic are you working on?"
  } else if (lowerMessage.includes('study plan') || lowerMessage.includes('learning plan')) {
    return "I'd love to help you create a personalized study plan! What subject are you focusing on, and how much time can you dedicate to learning each week?"
  } else {
    return "I'm here to help with your learning journey! Feel free to ask about programming, web development, data science, or request help with study planning and explanations of complex topics."
  }
}