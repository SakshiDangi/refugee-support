// src/app/api/jobs/route.ts
import { NextResponse } from 'next/server';
import { Job } from '@/types';

export async function GET() {
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'FULL_TIME',
      description: 'Develop modern web applications using React and TypeScript.',
      requirements: ['React', 'TypeScript'],
      salaryRange: [90000, 120000],
      postedDate: new Date('2025-04-07')
    },
    {
      id: '2',
      title: 'Backend Developer',
      company: 'Code Factory',
      location: 'New York, NY',
      type: 'CONTRACT',
      description: 'Build scalable APIs and services with Node.js.',
      requirements: ['Node.js', 'MongoDB'],
      salaryRange: [80000, 110000],
      postedDate: new Date('2025-04-05')
    }
  ];

  return NextResponse.json(jobs);
}
