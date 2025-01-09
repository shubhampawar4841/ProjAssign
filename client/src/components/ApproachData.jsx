const approaches = [
  { label: "Facts", percentage: 25 },
  { label: "Analysis", percentage: 32 },
  { label: "Elimination", percentage: 19 },
  { label: "Guess", percentage: 24 },
];

function ApproachData() {
  return (
    <div className="bg-white rounded-md p-2 border border-blue-300">
      <h3 className="flex items-start space-x-1 text-sm font-semibold mb-2">
        <svg
          className="w-4 h-4"
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
        <span className="text-gray-500">Approach Data</span>
      </h3>
      <div className="space-y-1">
        {approaches.map(({ label, percentage }) => (
          <div
            key={label}
            className="flex items-start justify-start p-2 rounded-md border border-blue-300 space-x-2"
          >
            <span className="text-xs font-semibold text-blue-600 px-1 py-0.5 border border-blue-500 rounded bg-blue-100">
              {percentage}%
            </span>
            <span className="text-xs">
              <span className="font-bold text-gray-900">Based on </span>
              <span className="text-indigo-600 font-semibold">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApproachData;
