'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/types/job';
import LoadingSpinner from '@/components/load-spinner';
import { JobCard } from '@/components/job-card';
import { JobFilter } from '@/components/job-filter';
import { DateFormatter } from '@/components/date-formatter';
import Link from 'next/link';
import ErrorDisplay from '@/components/error-display';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid data format');
        
        setJobs(data);
        setFilteredJobs(data);
      } catch (_error) {
        setError(_error instanceof Error ? _error.message : 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (searchTerm: string, jobType: string) => {
    const filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return jobType === 'All' ? matchesSearch : job.type === jobType;
    });
    
    setFilteredJobs(filtered);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Career Opportunities</h1>
        <p className="text-lg text-gray-600">Find your next professional challenge</p>
      </section>

      <JobFilter onSearch={handleSearch} />

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-gray-500">No positions match your current filters</p>
        </div>
      )}

    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Current Job Openings</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">
              {job.company} • {job.location}
            </p>
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {job.type.replace('_', ' ')}
              </span>
            </div>
            <div className="text-green-600 font-medium mb-4">
              ${job.salaryRange[0].toLocaleString()} - ${job.salaryRange[1].toLocaleString()}
            </div>
            <Link
              href={`/jobs/${job.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details →
            </Link>
            <div className="mt-4 text-sm text-gray-500">
              Posted: <DateFormatter isoDate={job.postedDate} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
