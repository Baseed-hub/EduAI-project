import { motion } from 'framer-motion';
function CourseCard({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl overflow-hidden card-hover"
    >
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
            {course.price}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">
            {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </span>
          <div className="flex items-center text-yellow-500">
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="ml-1">⭐</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{course.instructor}</span>
          <span className="mx-2">•</span>
          <span>{course.duration}</span>
          <span className="mx-2">•</span>
          <span>{course.students.toLocaleString()} students</span>
        </div>

        {/* Progress Bar (if enrolled) */}
        {course.isEnrolled && (
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
        )}

        <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
          course.isEnrolled 
            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
            : 'btn-primary'
        }`}>
          {course.isEnrolled ? 'Continue Learning' : 'Enroll Now'}
        </button>
      </div>
    </motion.div>
  )
}
export default CourseCard;