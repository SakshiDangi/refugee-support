import { Job } from '@/types/job';

interface JobDetailsProps {
  job: Job;
}

export const JobDetails = ({ job }: JobDetailsProps) => {
  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      {/* ...other job details */}
    </div>
  );
};
