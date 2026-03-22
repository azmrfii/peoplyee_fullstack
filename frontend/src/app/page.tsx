"use client";

import { useState, useEffect } from "react";
import { useJobs } from "../app/hooks/useJobs";
import JobCard from "../app/components/JobCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);
  const { data: jobs, isLoading } = useJobs(debouncedSearch);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Find Your Dream Job
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover the best opportunities in Southeast Asia
          </p>
        </header>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search by job title or company..."
            className="w-full p-4 pl-12 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-4 text-gray-400 text-xl">
            🔍
          </span>
        </div>

        <div className="grid gap-4">
          {isLoading ? (
            <p className="text-center py-10">Loading jobs...</p>
          ) : (
            jobs?.map((job: any) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </main>
  );
}
