'use client';

import { Job } from '@/types/job';
import Link from 'next/link';

export const JobRecommendations = ({ jobs }: { jobs: Job[] }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {jobs.map(job => (
      <div key={job.id} className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-4">{job.company}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        <Link
          href={`/jobs/${job.id}`}
          className="inline-block w-full text-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
);
