import React from 'react';
const PerformanceCard = () => {
  // Calculate the progress (9.1 out of 10 = 91%)
  const progress = 91
  const circumference = 2 * Math.PI * 45 // radius of 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg className="w-40 h-20" viewBox="0 0 100 50">
            {/* Background semi-circle */}
            <path
              d="M 10 45 A 40 40 0 0 1 90 45"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
            />

            {/* Progress semi-circle */}
            <path
              d="M 10 45 A 40 40 0 0 1 90 45"
              stroke="url(#performanceGradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="125.6"
              strokeDashoffset="11.3"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />

            <defs>
              <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F0129" />
                <stop offset="100%" stopColor="#10062B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center mt-2">
              <div className="text-2xl font-bold text-gray-900">9.1</div>
              <div className="text-xs text-gray-500">of 10 max LTS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">2024-2025 Spring Semester</div>
    </div>
  )
}

export default PerformanceCard
