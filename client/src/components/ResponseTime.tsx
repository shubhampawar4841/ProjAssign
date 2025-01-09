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
        <span className="text-gray-500">Response Time</span>
      </h3>

      {/* Flex container for percentage and time */}
      <div className="flex items-center justify-between bg-indigo-100 p-2 rounded-md border border-dashed border-gray-500">
        {/* Percentage */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-teal-500">
            60<span className="text-xl text-neutral-400">%</span>
          </div>
          <div className="text-xl ml-2">Ans took</div>
        </div>

        {/* Upper Tick */}
        <div className="flex flex-col items-center text-xs text-gray-500">
          <div className="text-4xl text-red-700">↑</div>
          <span className="text-blue-600">2min</span>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-2 border-gray-300" />

      {/* Slow message */}
      <div className="mt-1 flex items-center justify-center text-xl font-semibold">
        <span className="text-black">You are</span>
        <span className="ml-2 text-red-500">slow</span>
      </div>
    </div>
  );
}

export default ResponseTime;
