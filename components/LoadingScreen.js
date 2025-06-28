import { Sparkles } from 'lucide-react';
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold gradient-text mb-2">Loading EduAI</h2>
        <p className="text-gray-600">Preparing your personalized learning experience...</p>
      </div>
    </div>
  )
}
export default LoadingScreen;