"use client";

import { useParams, useRouter } from "next/navigation";
import { useJob } from "../../hooks/useJob";

export default function JobDetail() {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading, error } = useJob(id as string);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 animate-pulse">Loading job details...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>Error loading job detail. Please try again later.</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <span>← Back to Jobs</span>
        </button>

        <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <div className="border-b border-gray-100 dark:border-gray-800 pb-6 mb-6">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                  {data.title}
                </h1>
                <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
                  {data.company}
                </p>
                <p className="text-gray-500 mt-1 flex items-center gap-1">
                  📍 {data.location}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-gray-50 dark:bg-[#252525] rounded-2xl">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                Estimated Salary
              </h2>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {data.salaryRange || "Negotiable"}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">
              Description
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {data.description}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">
              Requirements & Skills
            </h2>
            <div className="flex gap-2 mt-4 flex-wrap">
              {data.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
