'use client';

import { useState } from 'react';

export const JobFilter = ({ onSearch }: { onSearch: (term: string, type: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('All');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, jobType);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search positions, companies, or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Employment Types</option>
          <option value="FULL_TIME">Full-Time</option>
          <option value="PART_TIME">Part-Time</option>
          <option value="CONTRACT">Contract</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Apply Filters
      </button>
    </form>
  );
};
