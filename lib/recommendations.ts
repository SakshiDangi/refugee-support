import { Job } from '@/types/job';

const SIMILARITY_THRESHOLD = 0.7;

export const getRecommendedJobs = (currentJob: Job, allJobs: Job[]): Job[] => {
  try {
    // Simple content-based filtering (replace with actual AI model)
    const currentSkills = currentJob.skills.map(s => s.toLowerCase());
    
    return allJobs
      .filter(job => job.id !== currentJob.id)
      .map(job => {
        const jobSkills = job.skills.map(s => s.toLowerCase());
        const commonSkills = currentSkills.filter(s => jobSkills.includes(s));
        const similarity = commonSkills.length / currentSkills.length;
        return { ...job, similarity };
      })
      .filter(job => job.similarity >= SIMILARITY_THRESHOLD)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);
  } catch (error) {
    console.error('Recommendation error:', error);
    return [];
  }
};
