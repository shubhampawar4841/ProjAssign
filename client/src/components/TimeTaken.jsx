function TimeTaken() {
    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="flex items-center gap-2 font-semibold mb-4 text-slate-400">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          Time Taken
        </h3>
  
        <div className="space-y-6">
          {/* First Ruler with Progress Bar */}
          <div className="relative">
            {/* Ruler Background */}
            <div className="bg-purple-50 h-12 rounded-lg relative">
              <div className="absolute inset-0 flex justify-between px-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="h-3 w-px bg-gray-300" />
                    <span className="text-xs text-gray-500 mt-1">
                      {i === 0 ? '10sec' : `${(i + 1) * 10}`}
                    </span>
                  </div>
                ))}
              </div>
              {/* Red Progress Bar */}
              <div className="absolute top-2 left-4 right-4 h-2">
                <div className="bg-red-500 h-full rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
  
          {/* Description Text */}
          <p className="text-sm text-gray-500">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
  
          {/* Second Ruler with Center Indicator */}
          <div className="relative">
            <div className="bg-purple-50 h-12 rounded-lg relative">
              <div className="absolute inset-0 flex justify-between px-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="h-3 w-px bg-gray-300" />
                    <span className="text-xs text-gray-500 mt-1">
                      {i === 0 ? '4sec' : i}
                    </span>
                  </div>
                ))}
              </div>
              {/* Center Progress Indicator */}
              <div className="absolute top-0 left-1/2 h-full w-1 bg-purple-400 -translate-x-1/2" />
              {/* Green and Red Zones */}
              <div className="absolute top-2 left-4 right-4 h-2 flex">
                <div className="bg-green-500 h-full rounded-l-full" style={{ width: '45%' }} />
                <div className="bg-red-500 h-full rounded-r-full" style={{ width: '55%' }} />
              </div>
            </div>
          </div>
  
          {/* Description Text */}
          <p className="text-sm text-gray-500">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </div>
    )
  }
  
  export default TimeTaken
  
  