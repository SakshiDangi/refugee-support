'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import jobData from '@/data/jobs.json';
import { Job } from '@/types';

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundJob = jobData.find(j => j.id === params.id);
      
      if (foundJob) {
        setJob(foundJob);
      } else {
        // Redirect to jobs page if job not found
        router.push('/jobs');
      }
      
      setIsLoading(false);
    }
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!job) {
    return null; // Will redirect
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/jobs" className="inline-flex items-center text-blue-600 mb-6 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Job Listings
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-700 mb-4">
              <span className="font-medium">{job.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{job.location}</span>
              <span className="hidden sm:inline">•</span>
              <span>{job.type}</span>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
              {job.salary}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>
            
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.requirements.map((req: string, index: number) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Apply for this Position</h2>
            <p className="text-gray-700 mb-4">
              Interested in this role? Submit your application now to join our team!
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
