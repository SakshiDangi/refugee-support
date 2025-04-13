'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import jobData from '@/data/jobs.json';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [selectedType, setSelectedType] = useState('All');

  // Job types for filtering
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote'];

  useEffect(() => {
    // Filter jobs based on search term and selected type
    const results = jobData.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'All' || job.type === selectedType;
      
      return matchesSearch && matchesType;
    });
    
    setFilteredJobs(results);
  }, [searchTerm, selectedType]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Job Board</h1>
        <p className="text-gray-600">
          Find your next opportunity with our AI-powered job matching.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Jobs
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title, company, or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              id="jobType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl shadow-md">
            <p className="text-gray-500">No jobs match your search criteria.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Posted on {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                  <span className="font-medium">{job.company}</span> • {job.location}
                </p>
                <p className="text-green-600 font-medium">{job.salary}</p>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <h3 className="font-medium mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/jobs/${job.id}`} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Job
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
