const Suggestions = () => {
  const items = [
    {
      range: ' Q.1-12',
      time: '40sec',
      level: 'Easy',
      levelColor: 'text-teal-500'
    },
    {
      range: 'Q.12-32',
      time: '1.5min',
      level: 'Medium',
      levelColor: 'text-amber-500'
    },
    {
      range: 'Q.32-40',
      time: '3min',
      level: 'Hard',
      levelColor: 'text-red-500'
    }
  ]

  return (
    <div className="bg-white rounded-lg p-1">
      <div className="flex items-center gap-1 mb-6">
        <svg 
          className="w-5 h-5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="font-semibold text-gray-500">Suggestions</h3>
      </div>

      <div className="flex justify-between max-w-md">
        {items.map((item) => (
          <div key={item.range} className="flex flex-col items-center">
            <span className="text-xs text-white bg-indigo-700 border rounded-md mb-1">{item.range}</span>
            <div className="bg-purple-50 border border-purple-200 text-black px-2 py-1.5 rounded-sm border-dashed text-sm mb-2 font-bold">
              {item.time}
            </div>
            <span className={`text-sm font-medium ${item.levelColor}`}>
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggestions
