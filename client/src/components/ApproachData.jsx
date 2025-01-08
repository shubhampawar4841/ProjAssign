const approaches = [
    { label: "Based on Facts", percentage: 25 },
    { label: "Based on Analysis", percentage: 32 },
    { label: "Based on Elimination", percentage: 19 },
    { label: "Based on Guess", percentage: 24 },
  ];
  
  function ApproachData() {
    return (
      <div className="bg-white rounded-lg p-6 border border-blue-300">
        <h3 className="flex items-center space-x-2 font-semibold mb-4">
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span>Approach Data</span>
        </h3>
        <div className="space-y-2">
          {approaches.map(({ label, percentage }) => (
            <div
              key={label}
              className="flex items-center justify-between p-2 rounded-lg border border-blue-300"
            >
              <span className="font-semibold text-blue-600 px-2 py-1 border-2 border-blue-500 rounded bg-blue-100">
                {percentage}%
              </span>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ApproachData;
  