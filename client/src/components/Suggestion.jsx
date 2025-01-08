function Suggestions() {
    const suggestions = [
      { label: "Easy", time: "40sec", color: "bg-teal-100 text-teal-800" },
      { label: "Medium", time: "1.5min", color: "bg-amber-100 text-amber-800" },
      { label: "Hard", time: "3min", color: "bg-red-100 text-red-800" },
    ];
  
    return (
      <div className="bg-white rounded-md p-2 border-l-2 border-cyan-400">
        <h3 className="text-xs font-semibold mb-2 flex items-center gap-1">
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
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          Suggestions
        </h3>
        <div className="flex gap-4">
          {suggestions.map(({ label, time, color }) => (
            <div key={label} className="flex flex-col items-center">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>
                {time}
              </span>
              <span
                className={`mt-0.5 text-xs ${
                  label === "Easy"
                    ? "text-teal-600"
                    : label === "Medium"
                    ? "text-amber-600"
                    : "text-red-600"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Suggestions;
  