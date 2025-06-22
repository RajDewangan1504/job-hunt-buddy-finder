
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { JobSeekerForm } from '@/components/JobSeekerForm';
import { JobSeekerList } from '@/components/JobSeekerList';
import { JobSeeker } from '@/types/jobSeeker';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut } from 'lucide-react';
import axios from 'axios';

const AdminPanel = () => {
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJobSeeker, setEditingJobSeeker] = useState<JobSeeker | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin-login');
      return;
    }

    // Load job seekers from localStorage
    const savedJobSeekers = localStorage.getItem('jobSeekers');
    if (savedJobSeekers) {
      setJobSeekers(JSON.parse(savedJobSeekers));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin-login');
  };

  const handleSaveJobSeeker = async (jobSeekerData: Omit<JobSeeker, 'id' | 'createdAt'>) => {
    try {
      if (editingJobSeeker) {
        const updatedJobSeeker: JobSeeker = {
          ...editingJobSeeker,
          ...jobSeekerData,
        };

        await axios.put(
          `https://rojgar-margadarshan.onrender.com/api/v1/workers/update-worker/${editingJobSeeker.id}`,
          updatedJobSeeker,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Update UI
        const updatedJobSeekers: JobSeeker[] = jobSeekers.map(js =>
          js.id === editingJobSeeker.id ? updatedJobSeeker : js
        );

        setJobSeekers(updatedJobSeekers);
        setShowForm(false);
        setEditingJobSeeker(null);
      }
    } catch (error: any) {
      console.error('Failed to update job seeker:', error.response?.data || error.message);
      alert(`Failed to update job seeker: ${error.response?.data?.message || error.message}`);
    }
  };



  const handleEditJobSeeker = (jobSeeker: JobSeeker) => {
    setEditingJobSeeker(jobSeeker);
    setShowForm(true);
  };

  const handleUpdateStatus = (id: string, status: 'Available' | 'Booked') => {
    const updatedJobSeekers = jobSeekers.map(js =>
      js.id === id ? { ...js, status } : js
    );
    // setJobSeekers(updatedJobSeekers);
    localStorage.setItem('jobSeekers', JSON.stringify(updatedJobSeekers));
  };
  const handleDeleteJobSeeker = async (id: string) => {
    try {
      await axios.delete(`https://rojgar-margadarshan.onrender.com/api/v1/workers/delete-worker/${id}`);

      const updatedJobSeekers = jobSeekers.filter(js => js.id !== id);
      setJobSeekers(updatedJobSeekers);
      alert('Job seeker deleted successfully.');
    } catch (error: any) {
      console.error('Failed to delete job seeker:', error.response?.data || error.message);
      alert(`Failed to delete job seeker: ${error.response?.data?.message || error.message}`);
    }
  };


  //  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);

  useEffect(() => {
    const fetchJobSeekers = async () => {
      try {
        const res = await axios.get('https://rojgar-margadarshan.onrender.com/api/v1/workers/get-workers');
        const formatted = res.data.Workers.map((worker: any) => ({
          id: worker._id,
          name: worker.name,
          fatherOrHusbandName: worker.fatherOrHusbandName,
          gender: worker.gender,
          aadharNumber: worker.aadharNumber,
          phone: worker.phone,
          workCategory: worker.workCategory,
          workExperience: worker.workExperience,
          status: worker.status,
          wardNumber: worker.wardNumber,
          wardName: worker.wardName,
          address: worker.address,
          image: worker.image,
        }));
        setJobSeekers(formatted);
        // console.log('Job seekers fetched:', formatted);
      } catch (error) {
        console.error('Failed to fetch job seekers:', error);
      }
    };

    fetchJobSeekers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Job Seekers Management</h2>
          <Button onClick={() => setShowForm(true)}>
            <Plus size={16} className="mr-2" />
            Add Job Seeker
          </Button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <JobSeekerForm
                jobSeeker={editingJobSeeker}
                onSave={handleSaveJobSeeker}
                onCancel={() => {
                  setShowForm(false);
                  setEditingJobSeeker(null);
                }}
              />
            </div>
          </div>
        )}

        {/* Job Seekers List */}
        <JobSeekerList
          jobSeekers={jobSeekers}
          onEdit={handleEditJobSeeker}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDeleteJobSeeker}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
