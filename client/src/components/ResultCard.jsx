import { Award, ClipboardCheck } from 'lucide-react';

function ResultCard() {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-dotted border-gray-300 max-w-lg mx-auto shadow-lg">
      {/* Main Result Section */}
      <div className="flex flex-col items-center mb-6">
        <img src="/ats.png" alt="Result" className="w-28 h-24" />
        <h2 className="text-indigo-600 text-2xl font-semibold mt-4">Your Result!</h2>
        <p className="text-gray-500 text-xs">All your insights & details in one place</p>
      </div>

      {/* Score Section */}
      <div className="bg-gray-50 rounded-lg p-2 mb-6 border border-gray-200 relative">
        <div className="flex items-center justify-between w-full max-w-md bg-white p-2 rounded-lg">
          {/* Clipboard Icon */}
          <div className="bg-purple-50 p-1 rounded-lg">
            <ClipboardCheck className="w-6 h-6 text-purple-600" />
          </div>

          {/* Score Section */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-md mb-1">
              YOU'VE PASSED
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold">136</span>
              <span className="text-gray-500 text-sm">/240</span>
            </div>
          </div>

          {/* Accuracy Badge */}
          <div className="flex flex-col items-center">
            <span className="bg-teal-500 text-white text-sm px-2 py-1 rounded">
              76%
            </span>
            <span className="text-teal-500 text-xs mt-1">ACCURACY</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center space-x-4">
            <img src="/avatar.jpg" alt="Profile" className="w-12 h-12 rounded" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">230/</span>
                <span className="text-gray-500 text-xs">240</span>
              </div>
              <div className="text-sm text-gray-600">Top Score</div>
            </div>
          </div>
          <hr className="my-4 border-gray-600" />

          <div className="mt-2 flex items-center space-x-1 justify-between">
            <div className="space-x-1">
              <span className="text-sm text-gray-600">By</span>
              <span className="text-sm font-medium">Shubham Pawar</span>
            </div>
            <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">
              92% ACCURACY
            </span>
          </div>
        </div>
      </div>

      {/* Improve Your Marks Section */}
      <div className="bg-indigo-50 rounded-lg p-4 mb-6 border border-dotted border-indigo-200">
        <h3 className="font-semibold text-black font-bold mb-2">Improve Your Marks</h3>
        <p className="text-sm text-gray-500 mb-4">
          Improve your score by practicing more.
        </p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 transition-all">
          Practice More
        </button>
      </div>

      {/* Revisit Paper Section */}
      <div className="bg-indigo-50 rounded-lg p-4 border border-dotted border-indigo-200">
        <h3 className="font-semibold text-black font-bold mb-2">Revisit Paper</h3>
        <p className="text-sm text-gray-500 mb-4">
          Challenge your friends by simply sharing a link to this test.
        </p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 transition-all">
          Visit
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
