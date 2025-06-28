import React, { useState } from 'react';
function AITutorPage({ user }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: `Hello ${user.name}! I'm your AI tutor. I can help you with explanations, practice problems, study plans, and answer any questions about your courses. What would you like to learn today?`,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    'Explain React hooks',
    'Help with JavaScript closures',
    'Create a study plan for machine learning',
    'Practice problems for data structures',
    'Explain design patterns',
    'Help with CSS Grid layout'
  ]

  const handleSendMessage = async (message) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message)
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userMessage) => {
    const responses = {
      'react hooks': 'React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState for managing state and useEffect for side effects. Here\'s a simple example:\n\n```javascript\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);\n```\n\nWould you like me to explain any specific hook in detail?',
      'javascript closures': 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. This is a powerful concept in JavaScript!\n\nExample:\n```javascript\nfunction outerFunction(x) {\n  return function innerFunction(y) {\n    return x + y; // Inner function uses \'x\' from outer scope\n  };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // Outputs: 8\n```\n\nClosures are commonly used for data privacy and creating function factories. Need more examples?',
      'study plan': 'I\'d be happy to create a personalized study plan for you! Based on your current progress, here\'s a suggested machine learning study plan:\n\n**Week 1-2: Foundations**\n- Linear algebra review\n- Statistics and probability\n- Python for ML (NumPy, Pandas)\n\n**Week 3-4: Core Algorithms**\n- Linear regression\n- Logistic regression\n- Decision trees\n\n**Week 5-6: Advanced Topics**\n- Neural networks\n- Deep learning basics\n- Model evaluation\n\nWould you like me to adjust this based on your specific goals?',
      'default': 'That\'s a great question! I\'m here to help you understand complex concepts step by step. Could you provide more details about what specific aspect you\'d like me to explain? I can break down topics, provide examples, create practice problems, or help you develop study strategies.'
    }

    const lowerMessage = userMessage.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    return responses.default
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">AI Tutor</h1>
        <p className="text-xl text-gray-600">
          Your personal AI assistant for learning and problem-solving
        </p>
      </div>

      <div className="glass-effect rounded-2xl overflow-hidden">
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors border"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 border-t">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
              placeholder="Ask me anything about your courses..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              disabled={!inputMessage.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AITutorPage;