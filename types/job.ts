export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
  description: string;
  requirements: string[];
  salaryRange: [number, number];
  postedDate: string;
  skills: string[];
};
