
import React, { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { JobModal } from '@/components/JobModal';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo: string;
  posted: string;
  isRemote: boolean;
}

const sampleJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full Time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing user-facing features using modern JavaScript frameworks.',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Modern CSS skills', 'Git workflow knowledge'],
    benefits: ['Health insurance', 'Remote work', '401k matching', 'Unlimited PTO'],
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center',
    posted: '2 days ago',
    isRemote: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLab',
    location: 'New York, NY',
    type: 'Full Time',
    salary: '$130,000 - $170,000',
    description: 'Join our product team to drive the development of cutting-edge solutions. You will work closely with engineering and design teams.',
    requirements: ['3+ years PM experience', 'Agile methodology', 'Data analysis skills', 'Stakeholder management'],
    benefits: ['Equity package', 'Flexible hours', 'Learning budget', 'Health coverage'],
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=center',
    posted: '1 day ago',
    isRemote: false
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'DesignStudio',
    location: 'Austin, TX',
    type: 'Full Time',
    salary: '$90,000 - $120,000',
    description: 'Create amazing user experiences for our digital products. You will conduct user research and create wireframes and prototypes.',
    requirements: ['4+ years UX design', 'Figma expertise', 'User research skills', 'Portfolio required'],
    benefits: ['Creative environment', 'Design tools budget', 'Conference attendance', 'Flexible PTO'],
    logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center',
    posted: '3 days ago',
    isRemote: true
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataFlow Analytics',
    location: 'Seattle, WA',
    type: 'Full Time',
    salary: '$140,000 - $180,000',
    description: 'Analyze complex datasets to drive business insights. You will build machine learning models and create data visualizations.',
    requirements: ['PhD or Masters in related field', 'Python/R proficiency', 'ML frameworks', 'SQL expertise'],
    benefits: ['Research time', 'Conference budget', 'Stock options', 'Top-tier benefits'],
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=center',
    posted: '5 days ago',
    isRemote: true
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Remote',
    type: 'Full Time',
    salary: '$110,000 - $150,000',
    description: 'Build and maintain our cloud infrastructure. You will work with containerization, CI/CD pipelines, and monitoring systems.',
    requirements: ['3+ years DevOps experience', 'AWS/Azure knowledge', 'Docker/Kubernetes', 'Infrastructure as Code'],
    benefits: ['Fully remote', 'Home office budget', 'Latest tech gear', 'Professional development'],
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=center',
    posted: '1 week ago',
    isRemote: true
  },
  {
    id: '6',
    title: 'Mobile App Developer',
    company: 'AppMakers Studio',
    location: 'Los Angeles, CA',
    type: 'Contract',
    salary: '$80 - $120/hour',
    description: 'Develop cross-platform mobile applications using React Native. You will work on consumer-facing apps with millions of users.',
    requirements: ['React Native expertise', 'iOS/Android publishing', 'App store optimization', 'Performance optimization'],
    benefits: ['Flexible schedule', 'High hourly rate', 'Interesting projects', 'Potential for full-time'],
    logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=center',
    posted: '4 days ago',
    isRemote: false
  }
];

export const FeaturedJobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
          <p className="text-xl text-gray-600">Discover hand-picked jobs from top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Jobs
          </button>
        </div>
      </div>

      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </section>
  );
};
