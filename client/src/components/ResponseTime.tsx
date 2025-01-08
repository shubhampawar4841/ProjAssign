function ResponseTime() {
    return (
      <div className="bg-white rounded-md p-2">
        <h3 className="flex items-center space-x-1 text-sm font-semibold mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="flex items-center justify-between bg-indigo-100 p-2 rounded-md border border-dotted border-gray-300">
          <div className="text-2xl font-bold text-teal-500">
            60<span className="text-xs">%</span>
          </div>
          <div className="text-xs text-gray-500">
            Ans took <span className="text-red-500">↑ 2min</span>
          </div>
        </div>
        {/* Slow message */}
        <div className="mt-1 text-red-500 text-xs font-semibold">You are slow</div>
      </div>
    );
  }
  
  export default ResponseTime;
  