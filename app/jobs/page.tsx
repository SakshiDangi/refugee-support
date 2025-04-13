'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Job } from '@/types';
import { DateFormatter } from '@/components/date-formatter';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load jobs data from the JSON file
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json'); // Fetch jobs.json file
        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to load jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    return selectedType === 'All' ? matchesSearch : matchesSearch && job.type === selectedType;
  });

  if (loading) {
    return <div className="text-center p-8">Loading jobs...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Job Board</h1>
        <p className="text-gray-600">Find opportunities that match your skills</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Types</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="CONTRACT">Contract</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {job.type.replace('_', ' ')}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  Posted on <DateFormatter isoDate={job.postedDate} />
                </span>
              </div>
            </div>
            <Link
              href={`/jobs/${job.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-500">No jobs found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
