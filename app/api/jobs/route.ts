import { NextResponse } from "next/server";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salaryRange: [number, number];
  postedDate: string;
  skills: string[];
}

const jobs: Job[] = [
    {
        "id": "1",
        "title": "Frontend Developer",
        "company": "Digital Innovations",
        "location": "San Francisco, CA",
        "type": "FULL_TIME",
        "description": "Develop responsive web interfaces using modern frameworks.",
        "requirements": ["React", "TypeScript", "CSS", "Webpack"],
        "salaryRange": [85000, 125000],
        "postedDate": "2025-04-10T09:15:00.000Z",
        "skills": ["JavaScript", "UI/UX", "Agile Development"]
    },
    {
        "id": "2",
        "title": "Cloud Architect",
        "company": "SkyNet Solutions",
        "location": "Remote",
        "type": "CONTRACT",
        "description": "Design and implement cloud infrastructure solutions.",
        "requirements": ["AWS", "Terraform", "Kubernetes", "CI/CD"],
        "salaryRange": [95000, 145000],
        "postedDate": "2025-04-07T14:30:00.000Z",
        "skills": ["Cloud Security", "Microservices", "DevOps"]
    },
    {
        "id": "3",
        "title": "Data Engineer",
        "company": "InfoAnalytics",
        "location": "New York, NY",
        "type": "FULL_TIME",
        "description": "Build and maintain data pipelines for analytics.",
        "requirements": ["Python", "SQL", "Spark", "Airflow"],
        "salaryRange": [90000, 135000],
        "postedDate": "2025-04-05T11:20:00.000Z",
        "skills": ["Big Data", "ETL", "Data Warehousing"]
    },
    {
        "id": "4",
        "title": "Mobile Developer",
        "company": "AppCrafters",
        "location": "Austin, TX",
        "type": "PART_TIME",
        "description": "Develop cross-platform mobile applications.",
        "requirements": ["Flutter", "Dart", "REST APIs", "Firebase"],
        "salaryRange": [75000, 110000],
        "postedDate": "2025-04-03T16:45:00.000Z",
        "skills": ["Mobile UI", "Performance Optimization"]
    },
    {
        "id": "5",
        "title": "Cybersecurity Specialist",
        "company": "SecureNet",
        "location": "Washington, DC",
        "type": "FULL_TIME",
        "description": "Protect organizational IT infrastructure from threats.",
        "requirements": ["SIEM", "Pen Testing", "NIST Framework"],
        "salaryRange": [95000, 155000],
        "postedDate": "2025-04-12T08:00:00.000Z",
        "skills": ["Network Security", "Incident Response"]
    },
    {
        "id": "6",
        "title": "AI Research Scientist",
        "company": "DeepMind Labs",
        "location": "Boston, MA",
        "type": "FULL_TIME",
        "description": "Develop machine learning models for NLP tasks.",
        "requirements": ["Python", "TensorFlow", "PyTorch", "Research"],
        "salaryRange": [120000, 180000],
        "postedDate": "2025-04-09T10:10:00.000Z",
        "skills": ["Neural Networks", "Data Mining"]
    },
    {
        "id": "7",
        "title": "DevOps Engineer",
        "company": "CloudNexa",
        "location": "Seattle, WA",
        "type": "CONTRACT",
        "description": "Optimize deployment pipelines and infrastructure.",
        "requirements": ["Docker", "Jenkins", "AWS", "Monitoring"],
        "salaryRange": [80000, 130000],
        "postedDate": "2025-04-06T13:25:00.000Z",
        "skills": ["Automation", "CI/CD Pipelines"]
    },
    {
        "id": "8",
        "title": "UX Designer",
        "company": "CreativeStudio",
        "location": "Remote",
        "type": "PART_TIME",
        "description": "Create user-centered design solutions.",
        "requirements": ["Figma", "User Research", "Prototyping"],
        "salaryRange": [65000, 95000],
        "postedDate": "2025-04-08T09:45:00.000Z",
        "skills": ["Wireframing", "Accessibility"]
    },
    {
        "id": "9",
        "title": "Blockchain Developer",
        "company": "ChainTech",
        "location": "Miami, FL",
        "type": "CONTRACT",
        "description": "Develop smart contracts and DApps.",
        "requirements": ["Solidity", "Ethereum", "Web3.js"],
        "salaryRange": [100000, 160000],
        "postedDate": "2025-04-11T14:15:00.000Z",
        "skills": ["DeFi", "Cryptography"]
    },
    {
        "id": "10",
        "title": "Game Developer",
        "company": "NextGen Games",
        "location": "Los Angeles, CA",
        "type": "FULL_TIME",
        "description": "Develop 3D game engines and gameplay systems.",
        "requirements": ["C++", "Unreal Engine", "3D Math"],
        "salaryRange": [85000, 130000],
        "postedDate": "2025-04-04T11:30:00.000Z",
        "skills": ["Physics Simulation", "Multiplayer Networking"]
    },
  {
    id: '11',
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'FULL_TIME',
    description: 'Develop modern web applications using React and TypeScript.',
    requirements: ['React', 'TypeScript', 'CSS', 'HTML'],
    salaryRange: [90000, 120000],
    postedDate: '2025-04-07T00:00:00.000Z',
    skills: ['React', 'JavaScript', 'Frontend', 'Web Development']
  },
  {
    id: '12',
    title: 'Backend Developer',
    company: 'Code Factory',
    location: 'New York, NY',
    type: 'CONTRACT',
    description: 'Build scalable APIs and services with Node.js.',
    requirements: ['Node.js', 'MongoDB', 'Express', 'API Development'],
    salaryRange: [80000, 110000],
    postedDate: '2025-04-05T00:00:00.000Z',
    skills: ['Node.js', 'Backend', 'API', 'Database']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    let filteredJobs = [...jobs];

    // Filter by type
    const type = searchParams.get('type');
    if (type) {
      filteredJobs = filteredJobs.filter(j => j.type === type);
    }

    // Exclude specific ID
    const exclude = searchParams.get('exclude');
    if (exclude) {
      filteredJobs = filteredJobs.filter(j => j.id !== exclude);
    }

    // Limit results
    const limit = searchParams.get('limit');
    const finalJobs = limit ? filteredJobs.slice(0, Number(limit)) : filteredJobs;

    return NextResponse.json(finalJobs);
  } catch (_error) {
    console.error('Error fetching job:', _error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
