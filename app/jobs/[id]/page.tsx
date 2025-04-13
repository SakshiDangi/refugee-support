'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Job } from '@/types';
import { DateFormatter } from '@/components/date-formatter';

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load specific job data from the JSON file
    const fetchJob = async () => {
      try {
        const response = await fetch('/jobs.json'); // Fetch all jobs
        const data: Job[] = await response.json();
        const selectedJob = data.find((job) => job.id === id); // Find job by ID
        setJob(selectedJob || null);
      } catch (error) {
        console.error('Failed to load job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="text-center p-8">Loading job details...</div>;
  if (!job) return <div className="text-center p-8">Job not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-4">
        <span className="font-medium">{job.company}</span> • {job.location}
      </p>
      <p className="text-green-600 font-medium mb-4">
        ${job.salaryRange[0]} - ${job.salaryRange[1]}
      </p>
      <p className="text-gray-600 mb-4">{job.description}</p>

      <h2 className="text-xl font-semibold mb-3">Requirements</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
}
