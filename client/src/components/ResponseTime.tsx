function ResponseTime() {
    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="flex items-center space-x-2 font-semibold mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Response Time</span>
        </h3>
        {/* Flex container for percentage and time */}
        <div className="flex items-center justify-between bg-indigo-100 p-4 rounded-lg border-2 border-dotted border-gray-300">
          <div className="text-4xl font-bold text-teal-500">
            60<span className="text-lg">%</span>
          </div>
          <div className="text-sm text-gray-500">
            Ans took <span className="text-red-500">↑ 2min</span>
          </div>
        </div>
        {/* Slow message */}
        <div className="mt-2 text-red-500 text-sm font-semibold">You are slow</div>
      </div>
    );
  }
  
  export default ResponseTime;
  