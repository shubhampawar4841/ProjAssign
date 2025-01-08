function AccuracyChart() {
    const data = [75, 45, 35, 65, 55, 45, 65];
    const labels = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7'];
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Accuracy Over Time</h3>
        <p className="text-sm text-gray-600 mb-6">
          This chart compares accuracy levels over a series of tasks or time intervals.
          Hover over the bars to see detailed percentages.
        </p>
        <div className="h-64 relative">
          {/* Chart Grid */}
          <div className="absolute inset-0 grid grid-cols-7 gap-4">
            {data.map((height, index) => (
              <div key={index} className="relative h-full group">
                {/* Bar */}
                <div
                  className="absolute bottom-0 w-full bg-indigo-500 rounded-t transition-all duration-300 hover:bg-indigo-400"
                  style={{ height: `${height}%` }}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg">
                    {`${height}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center">
            {labels.map((label, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 font-medium text-center w-full"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default AccuracyChart;
  