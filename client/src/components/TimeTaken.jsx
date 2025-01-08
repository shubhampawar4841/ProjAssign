import React from "react";

function TimeTaken() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-xl mx-auto">
      <h3 className="font-semibold mb-4 text-gray-700">Time Taken</h3>
      <div className="space-y-6">
        {/* Progress bar with marker */}
        <div className="relative h-8">
          {/* Background (ruler track) */}
          <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
            {/* Red Progress */}
            <div className="bg-red-500 h-full" style={{ width: "60%" }} />
            {/* Green Progress */}
            <div
              className="bg-green-500 h-full absolute top-0 left-0"
              style={{ width: "30%" }}
            />
          </div>

          {/* Marker */}
          <div
            className="absolute top-0 left-[30%] h-full w-2 bg-blue-500 rounded cursor-pointer"
            style={{ transform: "translateX(-50%)" }}
          />

          {/* Ruler ticks */}
          <div className="absolute inset-0 flex items-center justify-between px-2 text-xs">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-3 w-px bg-gray-400" />
            ))}
          </div>
        </div>

        {/* Ruler labels */}
        <div className="flex justify-between text-sm text-gray-500">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>{i * 10}</span>
          ))}
        </div>

        {/* Caption */}
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      </div>
      <div className="space-y-6">
        {/* Progress bar with marker */}
        <div className="relative h-8">
          {/* Background (ruler track) */}
          <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
            {/* Red Progress */}
            <div className="bg-red-500 h-full" style={{ width: "60%" }} />
            {/* Green Progress */}
            <div
              className="bg-green-500 h-full absolute top-0 left-0"
              style={{ width: "30%" }}
            />
          </div>

          {/* Marker */}
          <div
            className="absolute top-0 left-[30%] h-full w-2 bg-blue-500 rounded cursor-pointer"
            style={{ transform: "translateX(-50%)" }}
          />

          {/* Ruler ticks */}
          <div className="absolute inset-0 flex items-center justify-between px-2 text-xs">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-3 w-px bg-gray-400" />
            ))}
          </div>
        </div>

        {/* Ruler labels */}
        <div className="flex justify-between text-sm text-gray-500">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>{i * 10}</span>
          ))}
        </div>

        {/* Caption */}
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default TimeTaken;
