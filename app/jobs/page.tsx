"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export interface JobLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
}
export interface Job {
  jobName: string;
  jobCost: number;
  createdAt: string;
  postedBy: string;
  jobLocation: JobLocation;
  jobDeadline: string;
  jobCategory: string;
  jobBids: number;
  _id: string;
  jobStatus: string;
  forCustomer: string;
}

const JobsTestPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/all`);
        setJobs(response.data?.jobs);
      } catch (error) {
        console.error("Failed to GET from API: ", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  const handleDeleteSuccess = (id: string) => {
    setJobs((jobs) => jobs.filter((job) => job._id !== id));
  };

  if (loading) {
    return <div className="p-4 text-gray-500 text-center">Loading jobs...</div>;
  }

  if (jobs.length === 0) {
    return <div className="p-4 text-gray-700 text-center">No jobs found.</div>;
  }

  return (
    <div>
      <p>Job Search Bar</p>
      <div className="max-w-7xl mx-auto py-4 px-4">
        <ul className="grid grid-cols-4 gap-6 list-none p-0">
          {jobs.map((job) => (
            <li key={job._id} className="flex justify-center">
              <p>JobCardForList</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobsTestPage;
