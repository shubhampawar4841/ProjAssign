import { Award } from 'lucide-react';

function ResultCard() {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-dotted border-gray-300">
      {/* Main Result Section */}
      <div className="flex flex-col items-center mb-6">
        <img src="/avatar.jpg" alt="Result" className="w-48 h-48" />
        <h2 className="text-indigo-600 text-2xl font-semibold mt-4">Your Result!</h2>
        <p className="text-gray-500">All your insights & details in one place</p>
      </div>

      {/* Score Section */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border-2 border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-indigo-100 p-2 rounded">
            <Award className="text-indigo-600" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">136</span>
              <span className="text-gray-500">/240</span>
              <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">
                76%
              </span>
            </div>
            <div className="text-xs text-indigo-600 font-medium">YOU'VE PASSED!</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center space-x-4">
            <img src="/avatar.jpg" alt="Profile" className="w-12 h-12 rounded" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">230</span>
                <span className="text-gray-500">/240</span>
              </div>
              <div className="text-sm text-gray-600">Top Score</div>
            </div>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm text-gray-600">By</span>
            <span className="text-sm font-medium">Parth Akotkar</span>
            <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">
              92% ACCURACY
            </span>
          </div>
        </div>
      </div>

      {/* Box 1: Improve Your Marks */}
      <div className="bg-indigo-50 rounded-lg p-4 mb-6 border-2 border-dotted border-indigo-200">
        <h3 className="font-semibold mb-2">Improve your Marks</h3>
        <p className="text-sm text-gray-500 mb-4">
          Improve your score by practicing more.
        </p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Practice more
        </button>
      </div>

      {/* Box 2: Revisit Paper */}
      <div className="bg-indigo-50 rounded-lg p-4 border-2 border-dotted border-indigo-200">
        <h3 className="font-semibold mb-2">Revisit Paper</h3>
        <p className="text-sm text-gray-500 mb-4">
          Challenge your friends by simply sharing a link to this test.
        </p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Visit
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
