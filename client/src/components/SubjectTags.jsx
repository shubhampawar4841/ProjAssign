const subjects = [
    'Geography',
    'Politics',
    'Current Affairs',
    'General Studies',
    'Mathematics',
    'Social Studies',
    'English Literature',
    'Indian History',
    'Economics'
  ];
  
  const bgColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500'
  ];
  
  function SubjectTags() {
    return (
      <div className="bg-white rounded-lg p-2">
        <h3 className="flex items-center space-x-4 font-semibold mb-4">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>Improvements</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span
              key={subject}
              className={`text-xs px-1 py-1 rounded-full ${
                bgColors[index % bgColors.length]
              }`}
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default SubjectTags;
  