import React from 'react';
import { JobSeeker } from '@/types/jobSeeker';

interface JobSeekerTableProps {
  jobSeekers: JobSeeker[];
}

export const JobSeekerTable: React.FC<JobSeekerTableProps> = ({ jobSeekers }) => {
  return (
    <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Job Seeker List</h2>
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm">
              <th className="p-3 text-left">Photo</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Father/Husband</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Aadhar</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Work</th>
              <th className="p-3 text-left">Exp.</th>
              <th className="p-3 text-left">Ward</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jobSeekers.map((seeker) => (
              <tr
                key={seeker.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 border-b dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100"
              >
                <td className="p-3">
                  {seeker.image ? (
                    <img
                      src={seeker.image}
                      alt="Profile"
                      className="w-10 h-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
                    />
                  ) : (
                    <span className="text-gray-400 italic">No Image</span>
                  )}
                </td>
                <td className="p-3">{seeker.name}</td>
                <td className="p-3">{seeker.fatherOrHusbandName}</td>
                <td className="p-3">{seeker.phone}</td>
                <td className="p-3">{seeker.aadharNumber}</td>
                <td className="p-3">{seeker.gender}</td>
                <td className="p-3">{seeker.workCategory}</td>
                <td className="p-3">{seeker.workExperience} yr</td>
                <td className="p-3">
                  {seeker.wardName} <span className="text-xs text-gray-500">#{seeker.wardNumber}</span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      seeker.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {seeker.status}
                  </span>
                </td>
                <td className="p-3">{seeker.address}</td>
              </tr>
            ))}
            {jobSeekers.length === 0 && (
              <tr>
                <td colSpan={11} className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No job seekers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
