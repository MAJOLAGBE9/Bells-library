'use client';

import { useState, useEffect } from 'react';

interface ProgressTrackerProps {
  bookId: string;
  totalPages: number;
}

export default function ProgressTracker({ bookId, totalPages }: ProgressTrackerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${bookId}`);
    if (savedProgress) {
      const data = JSON.parse(savedProgress);
      setCurrentPage(data.currentPage);
      setPercentage(Math.round((data.currentPage / totalPages) * 100));
    }
  }, [bookId, totalPages]);

  // Save progress when currentPage changes
  useEffect(() => {
    if (currentPage > 0) {
      const progressData = {
        currentPage,
        totalPages,
        lastRead: new Date().toISOString()
      };
      localStorage.setItem(`progress_${bookId}`, JSON.stringify(progressData));
      setPercentage(Math.round((currentPage / totalPages) * 100));
    }
  }, [currentPage, bookId, totalPages]);

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value);
    if (page >= 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Reading Progress</h3>
      
      {/* Progress Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
          </div>
        </div>
      </div>

      {/* Page Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Current Page:</span>
          <span className="font-semibold">{currentPage} / {totalPages}</span>
        </div>
        
        <input
          type="number"
          value={currentPage}
          onChange={handlePageChange}
          min="0"
          max={totalPages}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter page number"
        />

        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 10, totalPages))}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition"
        >
          +10 Pages
        </button>
      </div>
    </div>
  );
}