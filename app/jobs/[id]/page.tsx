'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Job } from '@/types/job';
import LoadingSpinner from '@/components/load-spinner';
import Link from 'next/link';

export default function JobDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [recommendations, setRecommendations] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recLoading, setRecLoading] = useState(true);

  // Fetch main job data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Job not found');
        }

        const data: Job = await response.json();
        setJob(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load job');
        router.push('/jobs');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id, router]);

  // Fetch recommendations after main job loads
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!job) return;

      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) throw new Error('Failed to load recommendations');
        
        const allJobs: Job[] = await response.json();
        
        // Filter recommendations by job type (excluding current job)
        const similarJobs = allJobs.filter(j => 
          j.type === job.type && j.id !== job.id
        ).slice(0, 4); // Get top 4 matches

        setRecommendations(similarJobs);
      } catch (err) {
        console.error('Recommendation error:', err);
      } finally {
        setRecLoading(false);
      }
    };

    if (job) fetchRecommendations();
  }, [job]);

  if (loading) return <LoadingSpinner />;
  // if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()}
        className="mb-8 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Jobs
      </button>

      {job && (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Job Header */}
          <div className="border-b pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                {job.type.replace('_', ' ')}
              </span>
              <p className="text-gray-600">
                {job.company} • {job.location}
              </p>
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Salary Range</h2>
              <p className="text-2xl text-green-700 font-medium">
                ${job.salaryRange[0].toLocaleString()} - ${job.salaryRange[1].toLocaleString()}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-700">{req}</li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-8">Similar Jobs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {recommendations.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {job.company} • {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/jobs/${job.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!recLoading && recommendations.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No similar jobs found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
