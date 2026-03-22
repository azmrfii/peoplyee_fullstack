import Link from "next/link";

export default function JobCard({ job }: { job: any }) {
  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="group border border-gray-200 dark:border-gray-800 p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 cursor-pointer">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company} | Salary: {job.salaryRange}</p>
          </div>
          <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">
            📍 {job.location}
          </span>
        </div>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          {job.description && <span className="flex items-center gap-1">{job.description}</span>}
        </div>
      </div>
    </Link>
  );
}