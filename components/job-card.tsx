import Link from 'next/link';
import { Job } from '@/types/job';
import { DateFormatter } from './date-formatter';

export const JobCard = ({ job }: { job: Job }) => (
  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
    <div className="flex flex-col h-full">
      <header>
        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">{job.company}</span>
          <span className="mx-2">•</span>
          <span>{job.location}</span>
        </p>
      </header>

      <div className="mt-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <footer className="mt-auto flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <DateFormatter isoDate={job.postedDate} />
        </div>
        <Link
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details →
        </Link>
      </footer>
    </div>
  </article>
);
